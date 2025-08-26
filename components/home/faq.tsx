"use client";

import React, { useState } from 'react';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Zap
} from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Làm thế nào để đăng ký tham gia sự kiện?",
      answer: "Chỉ cần tìm sự kiện bạn quan tâm, click vào nút 'Đăng ký tham gia' và điền thông tin cần thiết. Quá trình này chỉ mất vài giây! Bạn sẽ nhận được email xác nhận ngay lập tức.",
      category: "Đăng ký",
      icon: HelpCircle
    },
    {
      question: "Tôi có thể hủy đăng ký sự kiện không?",
      answer: "Có, bạn có thể hủy đăng ký bất cứ lúc nào trước khi sự kiện diễn ra. Vào trang 'Sự kiện của tôi' và click vào nút hủy đăng ký. Lưu ý rằng một số sự kiện có thể có chính sách hoàn tiền riêng.",
      category: "Quản lý",
      icon: HelpCircle
    },
    {
      question: "Ứng dụng có miễn phí không?",
      answer: "Có, ứng dụng hoàn toàn miễn phí cho người dùng. Chúng tôi chỉ thu phí từ các tổ chức tổ chức sự kiện. Bạn có thể đăng ký và sử dụng tất cả tính năng mà không mất bất kỳ chi phí nào.",
      category: "Chi phí",
      icon: HelpCircle
    },
    {
      question: "Làm sao để nhận thông báo về sự kiện mới?",
      answer: "Bạn có thể bật thông báo trong cài đặt ứng dụng. Chúng tôi sẽ gửi thông báo về sự kiện mới phù hợp với sở thích và địa điểm của bạn. Bạn cũng có thể tùy chỉnh tần suất thông báo.",
      category: "Thông báo",
      icon: HelpCircle
    },
    {
      question: "Tôi có thể tìm sự kiện theo địa điểm không?",
      answer: "Có, bạn có thể tìm kiếm sự kiện theo thành phố, quận/huyện hoặc thậm chí theo địa chỉ cụ thể. Chúng tôi cũng có tính năng gợi ý sự kiện gần bạn dựa trên vị trí hiện tại.",
      category: "Tìm kiếm",
      icon: HelpCircle
    },
    {
      question: "Làm thế nào để liên hệ hỗ trợ khách hàng?",
      answer: "Bạn có thể liên hệ chúng tôi qua nhiều cách: chat trực tuyến 24/7, email support@eventapp.vn, hoặc gọi hotline 1900-xxxx. Đội ngũ hỗ trợ sẽ phản hồi trong vòng 2 giờ.",
      category: "Hỗ trợ",
      icon: HelpCircle
    },
    {
      question: "Tôi có thể đánh giá sự kiện sau khi tham gia không?",
      answer: "Có, bạn có thể đánh giá và viết review về sự kiện đã tham gia. Điều này giúp cộng đồng có thông tin để lựa chọn sự kiện phù hợp. Đánh giá của bạn rất có giá trị!",
      category: "Đánh giá",
      icon: HelpCircle
    },
    {
      question: "Ứng dụng có hỗ trợ thanh toán trực tuyến không?",
      answer: "Có, chúng tôi hỗ trợ nhiều phương thức thanh toán: thẻ tín dụng/ghi nợ, chuyển khoản ngân hàng, ví điện tử (MoMo, ZaloPay, VNPay) và thanh toán tại cửa hàng tiện lợi.",
      category: "Thanh toán",
      icon: HelpCircle
    }
  ];

  const categories = ["Tất cả", "Đăng ký", "Quản lý", "Chi phí", "Thông báo", "Tìm kiếm", "Hỗ trợ", "Đánh giá", "Thanh toán"];
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredFaqs = selectedCategory === "Tất cả" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SparklesText 
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            colors={{ first: "var(--primary)", second: "var(--secondary)" }}
            sparklesCount={10}
          >
            Câu Hỏi Thường Gặp
          </SparklesText>
          
          <TypingAnimation 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            duration={90}
            delay={3000}
            startOnView={true}
          >
            Tìm câu trả lời cho những thắc mắc phổ biến về nền tảng đăng ký sự kiện của chúng tôi
          </TypingAnimation>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader 
                className="cursor-pointer pb-4"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <faq.icon className="w-4 h-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {faq.category}
                    </Badge>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {openIndex === index && (
                <CardContent className="pt-0 pb-6">
                  <div className="pl-11">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Không tìm thấy câu trả lời?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn. Liên hệ ngay để được tư vấn chi tiết.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Chat trực tuyến</div>
                    <div className="text-sm text-muted-foreground">Hỗ trợ 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">support@eventapp.vn</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Hotline</div>
                    <div className="text-sm text-muted-foreground">1900-xxxx</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8">
                  <MessageCircle className="w-4 h-4 mr-2 text-white" />
                  <span className="text-white">Chat ngay</span>
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Mail className="w-4 h-4 mr-2" />
                  Gửi email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
