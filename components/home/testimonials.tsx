"use client";

import React from 'react';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { Marquee } from '@/components/magicui/marquee';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: "Nguyễn Văn An",
      role: "Developer tại FPT",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Ứng dụng rất tiện lợi! Tôi đã tham gia được nhiều sự kiện công nghệ thú vị nhờ nền tảng này. Giao diện đẹp và dễ sử dụng.",
      rating: 5,
      company: "FPT Software"
    },
    {
      name: "Trần Thị Bình",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Giao diện đẹp, dễ sử dụng. Thông báo thông minh giúp tôi không bỏ lỡ sự kiện nào. Đội ngũ hỗ trợ rất nhiệt tình!",
      rating: 5,
      company: "TechStartup"
    },
    {
      name: "Lê Minh Cường",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Tính năng tìm kiếm thông minh giúp tôi tìm được những sự kiện phù hợp với sở thích. Rất hài lòng với trải nghiệm!",
      rating: 5,
      company: "VNG Corporation"
    },
    {
      name: "Phạm Thị Dung",
      role: "Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Đã sử dụng nhiều nền tảng đăng ký sự kiện nhưng đây là cái tốt nhất. Tốc độ nhanh, ổn định và đáng tin cậy.",
      rating: 5,
      company: "Viettel"
    },
    {
      name: "Hoàng Văn Em",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Là một designer, tôi đánh giá cao giao diện đẹp và trải nghiệm người dùng tuyệt vời của ứng dụng này.",
      rating: 5,
      company: "Tiki"
    },
    {
      name: "Vũ Thị Phương",
      role: "Business Analyst",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Dữ liệu sự kiện được cập nhật thường xuyên và chính xác. Rất hữu ích cho công việc của tôi.",
      rating: 5,
      company: "Grab"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SparklesText 
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            colors={{ first: "var(--primary)", second: "var(--secondary)" }}
            sparklesCount={15}
          >
            Đánh Giá Từ Người Dùng
          </SparklesText>
          
          <TypingAnimation 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            duration={70}
            delay={2000}
            startOnView={true}
          >
            Khám phá những trải nghiệm thực tế từ cộng đồng người dùng đã tin tưởng và sử dụng nền tảng của chúng tôi
          </TypingAnimation>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-4">
                {renderStars(5)}
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">4.8/5</div>
              <div className="text-lg text-muted-foreground mb-4">
                Từ hơn 2,500+ đánh giá tích cực
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="default" className="text-sm">
                  ⭐ Xuất sắc
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  🚀 Đáng tin cậy
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  💎 Chất lượng cao
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Marquee */}
        <div className="mb-16">
          <Marquee className="py-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="w-80 mx-4 p-6 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-primary/30 absolute -top-2 -left-1" />
                    <p className="text-muted-foreground leading-relaxed pl-4">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>

        {/* Second Marquee (Reverse) */}
        <div className="mb-16">
          <Marquee className="py-4" reverse>
            {testimonials.slice().reverse().map((testimonial, index) => (
              <Card key={index} className="w-80 mx-4 p-6 bg-gradient-to-br from-background to-muted/50 border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-primary/30 absolute -top-2 -left-1" />
                    <p className="text-muted-foreground leading-relaxed pl-4">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Tham gia cộng đồng của chúng tôi
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Hãy trở thành một phần của cộng đồng hơn 50,000+ người dùng đang tin tưởng và sử dụng nền tảng của chúng tôi.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="default" className="text-sm px-4 py-2">
                  <Star className="w-4 h-4 mr-2 text-white" />
                  <span className="text-white">4.8/5 Rating</span>
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  2,500+ Reviews
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  50K+ Users
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
