export interface AdminSalesStatDto {
    userId: number | null;
    smonth: string | null;
    syear: string | null;
    lectureName: string | null;
  
    smonthList?: AdminSalesStatDto[]; // 월별 데이터 리스트
    syearList?: AdminSalesStatDto[];  // 연도별 데이터 리스트
    profitList?: AdminSalesStatDto[]; // 수익
    costList?: AdminSalesStatDto[];   // 지출
    list?: AdminSalesStatDto[];       // 통합 리스트
  
    search?: AdminSalesStatDto | null;    // 검색 필터
    price: number;
  }
  