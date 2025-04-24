import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router'
import ReactDOM from 'react-dom/client';
import Layout from './Layout';


function Main(){


  return(
    <Layout currentMenu="main">
            <main className="main-content dashboard-container">
                <div className="card card-large" onClick={() => window.location.href = '/orderList?mode=Assigned'}>
                    <h3><i className="bi bi-bar-chart-line-fill"></i> 영업 관리</h3>
                    <div className="info-group">
                        <p><i className="bi bi-clock-fill"></i> 결재중 : 건</p>
                        <p><i className="bi bi-check-circle-fill"></i> 결재완료 :건</p>
                        <p><i className="bi bi-x-circle-fill"></i> 반려 : 건</p>
                    </div>
                </div>
                <div className="card card-large" onClick={() => window.location.href = '/customerList'}>
                    <h3><i className="bi bi-building"></i> 고객 관리</h3>
                    <div className="info-group">
                        <p><i className="bi bi-people-fill"></i> 총 고객사 수 : 개</p>
                        <p><i className="bi bi-person-add"></i> 최근 신규 고객 :개
                        </p>
                        <p><i className="bi bi-arrow-clockwise"></i> 계약 갱신
                            예정 : 개</p>
                    </div>
                </div>
                <div className="card card-large" onClick={() => window.location.href = '/employeeList'}>
                    <h3><i className="bi bi-people-fill"></i> 직원 관리</h3>
                    <div className="info-group">
                        <p><i className="bi bi-person-circle"></i> 전체 직원 수 : </p>
                        <p><i className="bi bi-person-check-fill"></i> 최근 채용 인원 : </p>
                        <p><i className="bi bi-person-x-fill"></i> 최근 퇴직 인원  : 명</p>
                    </div>
                </div>
                <div className="card card-large" onClick={() => window.location.href = '/productList'}>
                    <h3><i className="bi bi-box-seam"></i> 상품 관리</h3>
                    <div className="info-group">
                        <p><i className="bi bi-box"></i> 상품 전체 수량 : 개</p>
                        <p><i className="bi bi-star-fill"></i> 신상품 등록 : 개</p>
                        <p><i className="bi bi-box-seam"></i> 최근 판매량  : </p>
                        <p><i className="bi bi-list-check"></i> 월간 총 매출 : </p>
                    </div>
                </div>
                <div className="image-container">
                    <img src="/img/cardimg.jpg" alt="상품 이미지" className="logo-image"/>
                    <img src="/img/cardimg2.jpg" alt="상품 이미지" className="logo-image"/>
                </div>
                <div className="card" onClick={() => window.location.href = '/orderReport'}>
                    <h3><i className="bi bi-graph-up-arrow"></i> 주문 현황</h3>
                    <div className="info-group">
                        <p><i className="bi bi-list-check"></i> 총 주문 수 : 건</p>
                        <p><i className="bi bi-cash-coin"></i> 연간 총 매출 : </p>
                        <p><i className="bi bi-check-all"></i> 연 매출 목표 달성율 : </p>
                    </div>
                </div>
                <div className="card">
                    <h3><i className="bi bi-cash-coin"></i> 정산</h3>
                    <div className="info-group">
                        <p><i className="bi bi-cash-stack"></i> 정산금액 :</p>
                        <p><i className="bi bi-calendar-date"></i> 정산</p>
                        <p><i className="bi bi-credit-card"></i> 미수금 : </p>
                    </div>
                </div>
                <div className="card">
                    <h3><i className="bi bi-megaphone-fill"></i> 공지사항</h3>
                    <div className="info-group">
                        <p><i className="bi bi-bell-fill"></i> 새로운 이벤트 : 쉐어드원 자사 방문일</p>
                        <p><i className="bi bi-info-circle-fill"></i> 공지사항 업데이트 : 2024년 9월 26일</p>
                        <p><i className="bi bi-calendar-event"></i> 다음 회의 일정 : 2024년 9월 27일</p>
                    </div>
                </div>
            </main>
    </Layout>
  )
}

export default Main
