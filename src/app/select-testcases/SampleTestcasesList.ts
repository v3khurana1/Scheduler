export class testCases {
    id : number;
    name: String;
    checked : boolean;
    tollDependency : tollList[]
}

class tollList{
    TName : String;
}

export const TestCaseList : testCases[] = [
{id : 1, name : 'TC1', checked : false , tollDependency : [{TName : 'Toll 2'}, {TName : 'Toll 1'}] },
{id : 2, name : 'TC2', checked : false , tollDependency : [{TName : 'Toll 3'}, {TName : 'Toll 2'}] },
{id : 3, name : 'TC3', checked : false , tollDependency : [{TName : 'Toll 4'}, {TName : 'Toll 2'}] },
{id : 4, name : 'TC4', checked : false , tollDependency : [{TName : 'Toll 1'}, {TName : 'Toll 4'}] },
]