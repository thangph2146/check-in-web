import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Chào mừng đến với{" "}
          <span className="text-primary">CheckIn</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Hệ thống quản lý check-in hiện đại, giúp bạn theo dõi và quản lý việc điểm danh một cách hiệu quả.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Bắt đầu ngay
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Tìm hiểu thêm
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Tính năng nổi bật
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg border border-border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Check-in nhanh chóng</h3>
            <p className="text-muted-foreground">
              Quá trình check-in đơn giản và nhanh chóng chỉ với một cú nhấp chuột.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg border border-border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Báo cáo chi tiết</h3>
            <p className="text-muted-foreground">
              Theo dõi và phân tích dữ liệu check-in với các báo cáo chi tiết.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg border border-border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Bảo mật cao</h3>
            <p className="text-muted-foreground">
              Hệ thống bảo mật đa lớp, đảm bảo thông tin của bạn luôn được bảo vệ.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Sẵn sàng bắt đầu?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Tham gia cùng hàng nghìn người đang sử dụng CheckIn để quản lý việc điểm danh hiệu quả.
        </p>
        <Button size="lg" className="text-lg px-8 py-3">
          Đăng ký miễn phí
        </Button>
      </section>
    </div>
  );
}
