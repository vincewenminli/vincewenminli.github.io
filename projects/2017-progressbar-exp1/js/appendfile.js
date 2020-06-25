


function toExcel2() {
            var curTbl = document.getElementById("data_table");
            var oXL = new ActiveXObject("Excel.Application");
            //创建AX对象excel
            var oWB = oXL.Workbooks.Add();
            //获取workbook对象
            var oSheet = oWB.ActiveSheet;
            //激活当前sheet
            var Lenr = curTbl.rows.length;
            //获取表格行数
            for (i = 0; i < Lenr; i++) {
                var Lenc = curTbl.rows(i).cells.length;
                //取得表格行数
                for (j = 0; j < Lenc; j++) {
                    oSheet.Cells(i + 1, j + 1).value = curTbl.rows(i).cells(j).innerText;
                    //赋值
                }
            }
            oXL.Visible = true;
            //设置excel可见属性
        }