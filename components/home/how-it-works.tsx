"use client";

import React from 'react';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Calendar, 
  Bell, 
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tìm kiếm sự kiện",
      description: "Sử dụng bộ lọc thông minh để tìm sự kiện phù hợp với sở thích và địa điểm của bạn",
      icon: Search,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      features: ["Tìm kiếm theo danh mục", "Lọc theo địa điểm", "Sắp xếp theo thời gian", "Gợi ý cá nhân hóa"]
    },
    {
      number: "02",
      title: "Đăng ký tham gia",
      description: "Chỉ cần vài cú click để đăng ký tham gia sự kiện yêu thích một cách nhanh chóng",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      features: ["Đăng ký nhanh chóng", "Xác nhận email", "Thanh toán an toàn", "Nhận vé điện tử"]
    },
    {
      number: "03",
      title: "Nhận thông báo",
      description: "Nhận thông báo thông minh về sự kiện, nhắc nhở và cập nhật quan trọng",
      icon: Bell,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      features: ["Nhắc nhở trước sự kiện", "Cập nhật thay đổi", "Thông báo đặc biệt", "Tùy chỉnh thông báo"]
    },
    {
      number: "04",
      title: "Tham gia và kết nối",
      description: "Tham gia sự kiện, kết nối với cộng đồng và chia sẻ trải nghiệm tuyệt vời",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      features: ["Check-in tại sự kiện", "Kết nối với người tham gia", "Chia sẻ ảnh và trải nghiệm", "Đánh giá sự kiện"]
    }
  ];

  return (
    <section className="py-20 relative">
      <ScrollProgress className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SparklesText 
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            colors={{ first: "var(--primary)", second: "var(--secondary)" }}
            sparklesCount={12}
          >
            Cách Thức Hoạt Động
          </SparklesText>
          
          <TypingAnimation 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            duration={80}
            delay={2500}
            startOnView={true}
          >
            Chỉ cần 4 bước đơn giản để bắt đầu hành trình khám phá những sự kiện tuyệt vời cùng chúng tôi
          </TypingAnimation>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/50 relative overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs font-bold">
                    {step.number}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline for Mobile */}
        <div className="lg:hidden mb-16">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-8">
                <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center mr-4 flex-shrink-0 z-10`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <Card className="flex-1">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {step.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {step.number}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {step.description}
                    </p>
                    <div className="space-y-1">
                      {step.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-0">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Tiết kiệm thời gian</h3>
              <p className="text-muted-foreground">Đăng ký chỉ trong 30 giây, không cần điền form phức tạp</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <CardContent className="p-0">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Đa dạng địa điểm</h3>
              <p className="text-muted-foreground">Sự kiện tại hơn 20 tỉnh thành trên toàn quốc</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-0">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Cộng đồng lớn</h3>
              <p className="text-muted-foreground">Kết nối với hơn 50,000+ người có cùng sở thích</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Sẵn sàng bắt đầu?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Tham gia ngay hôm nay và trải nghiệm quy trình đăng ký sự kiện đơn giản nhất từ trước đến nay.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8">
                  <Search className="w-4 h-4 mr-2 text-white" />
                  <span className="text-white">Tìm sự kiện ngay</span>
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Calendar className="w-4 h-4 mr-2" />
                  Xem lịch sự kiện
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
