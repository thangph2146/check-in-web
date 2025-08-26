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
  Phone
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16">
          <SparklesText 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            colors={{ first: "oklch(0.577 0.245 27.325)", second: "oklch(0.379 0.146 265.522)" }}
            sparklesCount={12}
          >
            Câu Hỏi Thường Gặp
          </SparklesText>
          
          <TypingAnimation 
            className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4"
            duration={90}
            delay={3000}
            startOnView={true}
          >
            Tìm câu trả lời cho những thắc mắc phổ biến về nền tảng đăng ký sự kiện của chúng tôi
          </TypingAnimation>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full text-xs sm:text-sm px-3 sm:px-4 py-0 transition-all duration-300 hover:scale-105 ${
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "hover:bg-primary/10 hover:border-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="max-w-5xl mx-auto space-responsive mb-12 sm:mb-16">
          {filteredFaqs.map((faq, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover:bg-card"
            >
              <CardHeader 
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start sm:items-center justify-between gap-3">
                  <div className="flex items-start sm:items-center space-x-3 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0 group-hover:scale-110 transition-transform duration-300">
                      <faq.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </CardTitle>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                      {faq.category}
                    </Badge>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      {openIndex === index ? (
                        <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {openIndex === index && (
                <CardContent className="pt-0 pb-4 sm:pb-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="pl-11 sm:pl-13 border-l-2 border-primary/20 ml-4 sm:ml-5">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
          <Card className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-primary/20 shadow-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Không tìm thấy câu trả lời?
                </h3>
                <p className="font-bold text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                  Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn. Liên hệ ngay để được tư vấn chi tiết.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Card className="p-4 bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground text-sm sm:text-base">Chat trực tuyến</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Hỗ trợ 24/7</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground text-sm sm:text-base">Email</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">support@eventapp.vn</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground text-sm sm:text-base">Hotline</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">1900-xxxx</div>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button size="lg" className="px-6 sm:px-8 w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat ngay
                </Button>
                <Button variant="outline" size="lg" className="px-6 sm:px-8 w-full sm:w-auto border-primary/30 text-primary hover:bg-primary transition-all duration-300 hover:scale-105">
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
