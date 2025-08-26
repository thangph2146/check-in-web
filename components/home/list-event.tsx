"use client";

import React, { useEffect, useState } from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';

interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    category: string;
    attendees: number;
}

function ListEvent() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

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
                attendees: 1200
            },
            {
                id: 2,
                title: "Startup Pitch Competition",
                description: "Cuộc thi khởi nghiệp dành cho các startup trẻ với tổng giải thưởng lên đến 1 tỷ VND",
                date: "20 Tháng 12, 2024",
                location: "Saigon Innovation Hub, TP.HCM",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                category: "Khởi nghiệp",
                attendees: 500
            },
            {
                id: 3,
                title: "Design Workshop",
                description: "Workshop thiết kế UX/UI với các chuyên gia từ Google, Facebook và các công ty công nghệ hàng đầu",
                date: "25 Tháng 12, 2024",
                location: "FPT University, TP.HCM",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
                category: "Thiết kế",
                attendees: 200
            },
            {
                id: 4,
                title: "Digital Marketing Summit",
                description: "Hội thảo về marketing số với các case study thực tế và chiến lược marketing hiệu quả",
                date: "30 Tháng 12, 2024",
                location: "InterContinental Hanoi, Hà Nội",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                category: "Marketing",
                attendees: 800
            },
            {
                id: 5,
                title: "AI & Machine Learning Meetup",
                description: "Gặp gỡ và chia sẻ kiến thức về AI/ML với cộng đồng developers và researchers",
                date: "5 Tháng 1, 2025",
                location: "Viettel Tower, Hà Nội",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
                category: "AI/ML",
                attendees: 150
            },
            {
                id: 6,
                title: "Blockchain & Crypto Conference",
                description: "Hội nghị về blockchain, cryptocurrency và DeFi với các chuyên gia quốc tế",
                date: "10 Tháng 1, 2025",
                location: "Grand Plaza, TP.HCM",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
                category: "Blockchain",
                attendees: 600
            }
        ];

        // Giả lập loading từ API
        setTimeout(() => {
            setEvents(mockEvents);
            setLoading(false);
        }, 1000);
    }, []);

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
        <section className="container mx-auto px-4 py-20">
                    {/* Title */}
        <div className="text-center mb-16">
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
        </div>
            {/* List Event */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <CardContainer key={event.id} className="w-full">
                        <CardBody className="w-full">
                            <CardItem
                                translateZ="100"
                                className="w-full bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
                            >
                                <div className="relative">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                            {event.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-card/90 text-card-foreground px-2 py-1 rounded text-xs font-medium">
                                            {event.attendees} người tham gia
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {event.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {event.date}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {event.location}
                                        </div>
                                    </div>

                                                                         <button className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
                                         Đăng ký tham gia
                                     </button>
                                </div>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </section>
    );
}

export default ListEvent;