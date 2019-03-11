import { Component, OnInit,Injectable } from '@angular/core';
import { ProductListService } from '../product-list.service';
import {Testcases } from '../home/applicationName';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import {BehaviorSubject} from 'rxjs';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';

/**
 * Node for to-do item
 */
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}


const finalArray = {} 

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(finalArray, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: object, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}

@Component({
  selector: 'app-display-testcases',
  templateUrl: './display-testcases.component.html',
  styleUrls: ['./display-testcases.component.css'],
  providers: [ChecklistDatabase]
})
export class DisplayTestcasesComponent implements OnInit {


  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);


checkLoading :any;
  dataList: Testcases[];
  categoryArray = [];
  modArray = [];
  constructor(private productListService: ProductListService,private database: ChecklistDatabase) {
    this.checkLoading = false;
   }

   
 
  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';


  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  ngOnInit() {
    
    this.productListService.importList().subscribe(data => {
      this.dataList = data,
        this.findUniqueCategory()
    })

    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.database.dataChange.subscribe(data => {
      this.dataSource.data = data;
     
    });

  }

  findUniqueCategory = function () {
    const map = new Map();
    for (const item of this.dataList) {
      if (!map.has(item.categoryName)) {
        map.set(item.categoryName, true);
        this.categoryArray.push(item.categoryName);
        // finalArray.push({ [item.categoryName]: {} })
        finalArray[item.categoryName] = {}
      }
    }
    console.log(finalArray)
    this.findUniqueModule();
  }

  findUniqueModule = function () {
    const map = new Map();
    const categoryName = Object.keys(finalArray)
    console.log(categoryName)
    categoryName.forEach(cat => {
      this.dataList.forEach(item => {
        if (item.categoryName == cat) {
          if (!map.has(item.moduleName)) {
            map.set(item.moduleName, true);
            finalArray[cat][item.moduleName] = []
          }
        }
      })
    })
    console.log(finalArray)
    this.findTestCase()
  }

  findTestCase = function () {
    const categoryName = Object.keys(finalArray)
    categoryName.forEach(cat => {
      const moduleName = Object.keys(finalArray[cat])
      moduleName.forEach(modName => {
        this.dataList.forEach(item => {
          if(item.moduleName == modName){
            finalArray[cat][item.moduleName].push(item.testCaseName)
          }
        })
      })
    })
    console.log("After testcase fetch")
    console.log(finalArray);
  }
}
