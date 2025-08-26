"use client";

import React, { useState } from 'react';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Bell, 
  CheckCircle, 
  Zap,
  Users,
  TrendingUp,
  Gift,
  Shield
} from 'lucide-react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !loading) {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribed(true);
      setEmail('');
      setLoading(false);
      // Reset after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const benefits = [
    {
      icon: Bell,
      title: "Thông báo sớm nhất",
      description: "Nhận thông báo về sự kiện mới trước khi công bố rộng rãi"
    },
    {
      icon: Gift,
      title: "Ưu đãi đặc biệt",
      description: "Giảm giá và ưu đãi độc quyền cho thành viên newsletter"
    },
    {
      icon: TrendingUp,
      title: "Thống kê thị trường",
      description: "Báo cáo xu hướng sự kiện và insights thị trường hàng tháng"
    },
    {
      icon: Users,
      title: "Kết nối cộng đồng",
      description: "Tham gia cộng đồng chuyên gia và người có cùng sở thích"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SparklesText 
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
              colors={{ first: "var(--primary)", second: "var(--secondary)" }}
              sparklesCount={12}
            >
              Đăng Ký Nhận Tin
            </SparklesText>
            
            <TypingAnimation 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              duration={100}
              delay={3500}
              startOnView={true}
            >
              Không bỏ lỡ những sự kiện thú vị và cập nhật mới nhất từ cộng đồng của chúng tôi
            </TypingAnimation>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Tại sao nên đăng ký?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Tham gia hơn 25,000+ người đang nhận thông tin hữu ích từ chúng tôi mỗi tuần.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Badge variant="default" className="text-sm">
                  <Shield className="w-3 h-3 mr-1 text-white" />
                  <span className="text-white">Không spam</span>
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <Zap className="w-3 h-3 mr-1 text-white" />
                  <span className="text-white">Hủy đăng ký dễ dàng</span>
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <CheckCircle className="w-3 h-3 mr-1 text-white" />
                  <span className="text-white">Bảo mật thông tin</span>
                </Badge>
              </div>
            </div>

            {/* Newsletter Form */}
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-0">
                  {subscribed ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Đăng ký thành công!
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Cảm ơn bạn đã đăng ký. Chúng tôi sẽ gửi email xác nhận trong vài phút.
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="default" className="text-sm">
                          <Mail className="w-3 h-3 mr-1 text-white" />
                          <span className="text-white">Kiểm tra email</span>
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                          <Bell className="w-3 h-3 mr-1 text-white" />
                          <span className="text-white">Thông báo sắp tới</span>
                        </Badge>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mail className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Đăng ký ngay hôm nay
                        </h3>
                        <p className="text-muted-foreground">
                          Nhận thông tin mới nhất về sự kiện và ưu đãi đặc biệt
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-foreground">
                            Địa chỉ email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full" 
                          size="lg"
                          disabled={loading || !email}
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Đang đăng ký...
                            </>
                          ) : (
                            <>
                              <Mail className="w-4 h-4 mr-2 text-white" />
                              <span className="text-white">Đăng ký miễn phí</span>
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          Bằng cách đăng ký, bạn đồng ý với{' '}
                          <a href="#" className="text-primary hover:underline">
                            Chính sách bảo mật
                          </a>{' '}
                          của chúng tôi
                        </p>
                      </form>

                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            25K+ subscribers
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            98% satisfaction
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
