// Type definitions for ag-grid v13.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ICellEditorComp, ICellEditorParams } from "./cellEditors/iCellEditor";
import { ColDef } from "../entities/colDef";
export declare class CellEditorFactory {
    private context;
    private componentResolver;
    private gridOptionsWrapper;
    private init();
    addCellEditor(key: string, cellEditor: {
        new (): ICellEditorComp;
    }): void;
    createCellEditor(column: ColDef, params: ICellEditorParams): ICellEditorComp;
}
