"use client";

import React, { useState } from 'react';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@eventapp.vn",
      description: "Phản hồi trong 24 giờ",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Phone,
      title: "Hotline",
      value: "1900-xxxx",
      description: "Hỗ trợ 24/7",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: MapPin,
      title: "Văn phòng",
      value: "Hà Nội, Việt Nam",
      description: "Trụ sở chính",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      value: "8:00 - 18:00",
      description: "Thứ 2 - Thứ 6",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    }
  ];

  const departments = [
    { value: "general", label: "Tổng đài" },
    { value: "technical", label: "Hỗ trợ kỹ thuật" },
    { value: "business", label: "Hợp tác kinh doanh" },
    { value: "events", label: "Tổ chức sự kiện" },
    { value: "feedback", label: "Góp ý & Phản hồi" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SparklesText 
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            colors={{ first: "var(--primary)", second: "var(--secondary)" }}
            sparklesCount={10}
          >
            Liên Hệ Chúng Tôi
          </SparklesText>
          
          <TypingAnimation 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            duration={110}
            delay={4000}
            startOnView={true}
          >
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ để được tư vấn chi tiết
          </TypingAnimation>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Thông tin liên hệ
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Đội ngũ chuyên nghiệp của chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${info.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-lg font-medium text-foreground mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Tại sao chọn chúng tôi?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Phản hồi nhanh chóng trong 2 giờ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Đội ngũ chuyên nghiệp, tận tâm</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Hỗ trợ đa kênh 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Giải pháp tùy chỉnh theo nhu cầu</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-gradient-to-br from-background to-muted/50 border-border">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
                <p className="text-muted-foreground">
                  Điền form bên dưới và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất
                </p>
              </CardHeader>

              <CardContent className="p-0">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Gửi tin nhắn thành công!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="default" className="text-sm">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Đã gửi tin nhắn
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        Phản hồi trong 2h
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-foreground">
                          Họ và tên *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Nhập họ và tên"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Chủ đề *
                      </Label>
                                             <Select 
                         name="subject" 
                         value={formData.subject} 
                         onValueChange={(value: string) => setFormData({...formData, subject: value})}
                         required
                       >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn chủ đề liên hệ" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Nội dung tin nhắn *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Mô tả chi tiết vấn đề hoặc yêu cầu của bạn..."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={loading || !formData.name || !formData.email || !formData.subject || !formData.message}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Đang gửi tin nhắn...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 text-white" />
                          <span className="text-white">Gửi tin nhắn</span>
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Bằng cách gửi tin nhắn, bạn đồng ý với{' '}
                      <a href="#" className="text-primary hover:underline">
                        Chính sách bảo mật
                      </a>{' '}
                      của chúng tôi
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
                  <div className="text-muted-foreground">Người dùng</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                  <div className="text-muted-foreground">Sự kiện</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                  <div className="text-muted-foreground">Hỗ trợ</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                  <div className="text-muted-foreground">Hài lòng</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
