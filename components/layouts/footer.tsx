"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const certifications = [
    { name: "Chứng nhận kiểm định Chương trình đào tạo theo tiêu chuẩn AUN-QA", code: "aunqa" },
    { name: "Chứng nhận kiểm định Cơ sở giáo dục theo tiêu chuẩn MOET", code: "csgd" },
    { name: "Chứng nhận hệ thống quản lý theo tiêu chuẩn ISO 21001:2018 đối với tổ chức giáo dục của QUACERT", code: "iso" },
    { name: "Chứng nhận kiểm định Chương trình đào tạo theo tiêu chuẩn MOET", code: "cea" }
  ];

  const contactInfo = {
    mainOffice: "36 Tôn Thất Đạm, Phường Sài Gòn, TP.Hồ Chí Minh.",
    hamNghi: "39 Hàm Nghi, Phường Sài Gòn, TP. Hồ Chí Minh",
    hoangDieu: "56 Hoàng Diệu 2, Phường Thủ Đức, TP. Hồ Chí Minh",
    email: "dhnhtphcm@hub.edu.vn",
    admissionHotline: "0888353488",
    trainingHotline: "(028) 38 212 430"
  };

  const studentLinks = [
    { name: "Cổng thông tin đào tạo", href: "#" },
    { name: "Trang đăng ký tín chỉ", href: "#" },
    { name: "E-Student", href: "#" },
    { name: "Học trực tuyến HUB-LMS", href: "#" },
    { name: "Thư viện", href: "#" }
  ];

  const futureStudentLinks = [
    { name: "Trang thông tin tuyển sinh", href: "#" },
    { name: "Trang đăng ký xét tuyển", href: "#" }
  ];

  const staffLinks = [
    { name: "Hệ thống EOffice", href: "#" },
    { name: "Hệ thống HRM", href: "#" },
    { name: "Biểu mẫu", href: "#" },
    { name: "Cổng thông tin đào tạo", href: "#" }
  ];

  const alumniLinks = [
    { name: "Website HUB Alumni", href: "#" },
    { name: "Thông tin Alumni", href: "#" }
  ];

  const generalLinks = [
    { name: "Tin tức - Sự kiện", href: "#" },
    { name: "Thư viện Văn bản - Biểu mẫu", href: "#" },
    { name: "Tra cứu Văn Bằng", href: "#" },
    { name: "Liên hệ", href: "#" }
  ];

  const externalLinks = [
    { name: "Bộ Giáo dục và Đào tạo", href: "#" },
    { name: "Ngân hàng nhà nước Việt Nam", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-card via-muted/5 to-card border-t border-border/50 backdrop-blur-sm">
      <div className="container-responsive">
        {/* Main Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          {/* Logo Section - Enhanced */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16">
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative group mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src={isDark ? "/logo-white.png" : "/logo.png"}
                    alt="Đại học Ngân hàng TP.HCM"
                    className="relative w-48 h-auto"
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center lg:text-left mb-2">
                  Đại học Ngân hàng TP.HCM
                </h2>
                <p className="text-muted-foreground text-center lg:text-left">
                  Nền tảng giáo dục hàng đầu Việt Nam
                </p>
                <div className="flex space-x-4 mt-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>

            {/* Contact Info - Redesigned */}
            <div className="lg:w-2/3">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h4 className="font-bold text-foreground mb-6 text-center lg:text-left text-lg">Thông tin liên hệ</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <h5 className="font-medium text-foreground">Trụ sở chính</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{contactInfo.mainOffice}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <h5 className="font-medium text-foreground">Cơ sở Hàm Nghi</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{contactInfo.hamNghi}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <h5 className="font-medium text-foreground">Cơ sở Hoàng Diệu</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{contactInfo.hoangDieu}</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border/30">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{contactInfo.email}</p>
                    </div>
                    <div>
                      <span className="font-medium text-primary">Tuyển sinh:</span>
                      <p className="text-sm text-muted-foreground">{contactInfo.admissionHotline}</p>
                    </div>
                    <div>
                      <span className="font-medium text-secondary">Đào tạo:</span>
                      <p className="text-sm text-muted-foreground">{contactInfo.trainingHotline}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Certifications Section - Enhanced */}
          <div className="mb-12 lg:mb-16">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">Chứng nhận chất lượng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Card key={cert.code} className="group p-4 bg-gradient-to-br from-card to-muted/10 border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-primary mb-1">{cert.code.toUpperCase()}</div>
                      <p className="text-xs text-foreground leading-tight line-clamp-2">{cert.name}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Links Grid - Reorganized */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 lg:mb-16">
            {/* Student Links */}
            <div className="p-6 rounded-lg border border-border/20 bg-transparent">
              <h4 className="font-bold text-foreground mb-6 flex items-center">
                <div className="w-2 h-6 bg-primary rounded-full mr-3"></div>
                Người học
              </h4>
              <ul className="space-responsive">
                {studentLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 block"
                    >
                      • {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Student Links */}
            <div className="p-6 rounded-lg border border-border/20 bg-transparent">
              <h4 className="font-bold text-foreground mb-6 flex items-center">
                <div className="w-2 h-6 bg-secondary rounded-full mr-3"></div>
                Tương lai
              </h4>
              <ul className="space-responsive">
                {futureStudentLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-secondary transition-all duration-300 hover:translate-x-1 block"
                    >
                      • {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Staff Links */}
            <div className="p-6 rounded-lg border border-border/20 bg-transparent">
              <h4 className="font-bold text-foreground mb-6 flex items-center">
                <div className="w-2 h-6 bg-primary rounded-full mr-3"></div>
                Cán bộ - GV
              </h4>
              <ul className="space-responsive">
                {staffLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 block"
                    >
                      • {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alumni Links */}
            <div className="p-6 rounded-lg border border-border/20 bg-transparent">
              <h4 className="font-bold text-foreground mb-6 flex items-center">
                <div className="w-2 h-6 bg-secondary rounded-full mr-3"></div>
                Cựu học viên
              </h4>
              <ul className="space-responsive">
                {alumniLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-secondary transition-all duration-300 hover:translate-x-1 block"
                    >
                      • {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Links */}
            <div className="p-6 rounded-lg border border-border/20 bg-transparent">
              <h4 className="font-bold text-foreground mb-6 flex items-center">
                <div className="w-2 h-6 bg-primary rounded-full mr-3"></div>
                Thông tin chung
              </h4>
              <ul className="space-responsive">
                {generalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 block"
                    >
                      • {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* External Links */}
            <div className="p-6 rounded-lg border border-border/20 bg-transparent">
              <h4 className="font-bold text-foreground mb-6 flex items-center">
                <div className="w-2 h-6 bg-secondary rounded-full mr-3"></div>
                Link liên kết
              </h4>
              <ul className="space-responsive">
                {externalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-secondary transition-all duration-300 hover:translate-x-1 block"
                    >
                      • {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Enhanced */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white text-sm font-bold">©</span>
              </div>
              <p className="text-muted-foreground text-sm text-center md:text-left">
                Copyright © {currentYear} Đại Học Ngân Hàng TP. Hồ Chí Minh. Giấy phép ICP số: 41/GP-TTĐT.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <p className="text-muted-foreground text-sm">All Rights Reserved.</p>
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
