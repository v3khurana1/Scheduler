const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'iSource _UAT_TESTPack.xlsx',
    sheets : [
        {
            name : 'Logins & Other',
            header:{
                rows: 1
            },
            columnToKey: {
                B : 'moduleName',
                D : 'testCaseName',
            }
        },
        {
            name : 'Dashboard',
            header:{
                rows: 1
            },
            columnToKey: {
                B : 'moduleName',
                D : 'testCaseName',
            }
        },
        {
            name : 'My Events - RFP&RFQ',
            header:{
                rows: 1
            },
            columnToKey: {
                B : 'moduleName',
                D : 'testCaseName',
            }
        },
        {
            name : 'My Events - Auction',
            header:{
                rows: 1
            },
            columnToKey: {
                B : 'moduleName',
                D : 'testCaseName',
            }
        },
        {
            name : 'Japanese Auction',
            header:{
                rows: 1
            },
            columnToKey: {
                B : 'moduleName',
                D : 'testCaseName',
            }
        },
        {
            name : 'My Suppliers',
            header:{
                rows: 2
            },
            columnToKey: {
                B : 'moduleName',
                D : 'testCaseName',
            }
        }
    ]
});
// console.log(result)
const dbJson = [];
convertToDBFormat = function(){
    const categoryList = Object.keys(result)
    categoryList.forEach(cat => {
        // console.log(result[cat])
        result[cat].forEach(tc => {
            dbJson.push({
                "testCaseName" : tc.testCaseName,
                "testScriptName" : "test",
                "categoryName" : cat,
                "moduleName"  : tc.moduleName,
                "applicationName" : "iSource",
                "automationStatus" : false,
                "lastExecutionStatus" : "",
                "lastExecutionDate" : ""
            })
        })
    })
    console.log(dbJson)
}
convertToDBFormat();