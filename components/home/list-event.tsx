"use client";

import React, { useEffect, useState } from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { Marquee } from '@/components/magicui/marquee';
import { AnimatedList } from '@/components/magicui/animated-list';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Calendar, 
    MapPin, 
    Users, 
    Clock, 
    Star, 
    TrendingUp,
    ArrowRight,
    Play,
    Zap
} from 'lucide-react';

interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    category: string;
    attendees: number;
    price?: string;
    featured?: boolean;
}

function ListEvent() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

    useEffect(() => {
        // Tạo danh sách sự kiện tạm thời từ thông tin trên mạng
        const mockEvents: Event[] = [
            {
                id: 1,
                title: "Tech Conference 2024",
                description: "Hội nghị công nghệ lớn nhất năm với các chuyên gia hàng đầu trong lĩnh vực AI, Blockchain và Web3",
                date: "15-17 Tháng 12, 2024",
                location: "Trung tâm Hội nghị Quốc gia, Hà Nội",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
                category: "Công nghệ",
                attendees: 1200,
                price: "Miễn phí",
                featured: true
            },
            {
                id: 2,
                title: "Startup Pitch Competition",
                description: "Cuộc thi khởi nghiệp dành cho các startup trẻ với tổng giải thưởng lên đến 1 tỷ VND",
                date: "20 Tháng 12, 2024",
                location: "Saigon Innovation Hub, TP.HCM",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                category: "Khởi nghiệp",
                attendees: 500,
                price: "500.000 VND"
            },
            {
                id: 3,
                title: "Design Workshop",
                description: "Workshop thiết kế UX/UI với các chuyên gia từ Google, Facebook và các công ty công nghệ hàng đầu",
                date: "25 Tháng 12, 2024",
                location: "FPT University, TP.HCM",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
                category: "Thiết kế",
                attendees: 200,
                price: "300.000 VND"
            },
            {
                id: 4,
                title: "Digital Marketing Summit",
                description: "Hội thảo về marketing số với các case study thực tế và chiến lược marketing hiệu quả",
                date: "30 Tháng 12, 2024",
                location: "InterContinental Hanoi, Hà Nội",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                category: "Marketing",
                attendees: 800,
                price: "800.000 VND",
                featured: true
            },
            {
                id: 5,
                title: "AI & Machine Learning Meetup",
                description: "Gặp gỡ và chia sẻ kiến thức về AI/ML với cộng đồng developers và researchers",
                date: "5 Tháng 1, 2025",
                location: "Viettel Tower, Hà Nội",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
                category: "AI/ML",
                attendees: 150,
                price: "Miễn phí"
            },
            {
                id: 6,
                title: "Blockchain & Crypto Conference",
                description: "Hội nghị về blockchain, cryptocurrency và DeFi với các chuyên gia quốc tế",
                date: "10 Tháng 1, 2025",
                location: "Grand Plaza, TP.HCM",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
                category: "Blockchain",
                attendees: 600,
                price: "1.200.000 VND"
            }
        ];

        // Giả lập loading từ API
        setTimeout(() => {
            setEvents(mockEvents);
            setLoading(false);
        }, 1000);
    }, []);

    const categories = ['Tất cả', 'Công nghệ', 'Khởi nghiệp', 'Thiết kế', 'Marketing', 'AI/ML', 'Blockchain'];
    
    const filteredEvents = selectedCategory === 'Tất cả' 
        ? events 
        : events.filter(event => event.category === selectedCategory);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-muted-foreground">Đang tải danh sách sự kiện...</p>
                </div>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-4 py-20 relative">
            <ScrollProgress className="top-0" />
            
            {/* Title */}
            <div className="text-center">
                <SparklesText
                    className="text-4xl md:text-6xl font-bold text-foreground mb-4"
                    colors={{ first: "var(--primary)", second: "var(--secondary)" }}
                    sparklesCount={15}
                >
                    Sự Kiện Nổi Bật
                </SparklesText>
                <TypingAnimation
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    duration={50}
                    delay={1000}
                    startOnView={true}
                >
                    Khám phá các sự kiện công nghệ, khởi nghiệp và đổi mới sáng tạo hàng đầu
                </TypingAnimation>
                
                {/* Category Marquee */}
                    <Marquee className="[--duration:20s]" pauseOnHover>
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                variant={selectedCategory === category ? "default" : "outline"}
                                className={`mx-2 rounded-full ${selectedCategory === category ? "text-white" : ""}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </Marquee>
            </div>

            {/* Events List */}
            <AnimatedList className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event) => (
                        <CardContainer key={event.id} className="w-full">
                            <CardBody className="w-full">
                                <CardItem
                                    translateZ="100"
                                    className="w-full bg-card border border-border rounded-xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300"
                                >
                                    <div className="relative">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {event.featured && (
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                                                    <Star className="h-3 w-3 mr-1" />
                                                    Nổi bật
                                                </Badge>
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4">
                                            <Badge variant="secondary">
                                                <Users className="h-3 w-3 mr-1" />
                                                {event.attendees}
                                            </Badge>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <Badge variant="outline" className="bg-background/90">
                                                {event.price}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-6">
                                        <CardHeader className="p-0 mb-4">
                                            <CardTitle className="text-xl font-bold text-card-foreground mb-2 line-clamp-2">
                                                {event.title}
                                            </CardTitle>
                                            <p className="text-muted-foreground text-sm line-clamp-3">
                                                {event.description}
                                            </p>
                                        </CardHeader>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                {event.location}
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4 mr-2" />
                                                {event.attendees} người tham gia
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <ShimmerButton className="flex-1">
                                                <Zap className="h-4 w-4 mr-2 text-white" />
                                                <span className="text-white">Đăng ký ngay</span>
                                            </ShimmerButton>
                                            <Button variant="outline" size="icon" className="px-6 py-6">
                                                <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </AnimatedList>

            {/* Call to Action */}
            <div className="text-center mt-16">
                <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                    <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-4">Không tìm thấy sự kiện phù hợp?</h3>
                        <p className="text-muted-foreground mb-6">
                            Đăng ký nhận thông báo để không bỏ lỡ những sự kiện mới nhất
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <ShimmerButton>
                                <Play className="h-4 w-4 mr-2 text-white" />
                                <span className="text-white">Xem tất cả sự kiện</span>
                            </ShimmerButton>
                            <Button variant="outline" className="px-4 py-6">
                                <Calendar className="h-4 w-4 mr-2" />
                                Đăng ký nhận thông báo
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default ListEvent;