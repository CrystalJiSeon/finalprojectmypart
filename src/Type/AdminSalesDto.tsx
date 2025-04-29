export interface AdminSalesDto {
    adminsale_id: number;
    store_name: string;
    sale_name: string;
    cre_date: string;
    edit_date: string;
    price: number;
    a_code: string;
    b_code: string;
    checkedItems: string[];
    auto: string;
    startRowNum: number;
    endRowNum: number;
    pageNum: number;
    list: AdminSalesDto[]; // 재귀 구조
    startPageNum: number;
    endPageNum: number;
    totalPageCount: number;
    totalRow: number;
  }