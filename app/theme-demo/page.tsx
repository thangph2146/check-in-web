import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function ThemeDemo() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Red-600 & Blue-900 Theme Demo
        </h1>
        <p className="text-muted-foreground mb-8">
          Trang demo để test theme toggle với màu Red-600 và Blue-900 với giá trị OKLCH tùy chỉnh
        </p>
        <div className="flex justify-center mb-8">
          <ThemeToggle />
        </div>
      </div>

      {/* Color Palette Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Color Palette - Red-600 & Blue-900</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-background border border-border rounded-lg"></div>
            <p className="text-sm font-medium text-foreground">Background</p>
            <p className="text-xs text-muted-foreground">bg-background</p>
          </div>
          
          <div className="space-y-2">
            <div className="h-20 bg-card border border-border rounded-lg"></div>
            <p className="text-sm font-medium text-foreground">Card</p>
            <p className="text-xs text-muted-foreground">bg-card</p>
          </div>
          
          <div className="space-y-2">
            <div className="h-20 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-foreground font-medium">Primary (Red-600)</span>
            </div>
            <p className="text-sm font-medium text-foreground">Primary - Red-600</p>
            <p className="text-xs text-muted-foreground">bg-primary</p>
          </div>
          
          <div className="space-y-2">
            <div className="h-20 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-secondary-foreground font-medium">Secondary (Blue-900)</span>
            </div>
            <p className="text-sm font-medium text-foreground">Secondary - Blue-900</p>
            <p className="text-xs text-muted-foreground">bg-secondary</p>
          </div>
          
          <div className="space-y-2">
            <div className="h-20 bg-muted rounded-lg"></div>
            <p className="text-sm font-medium text-foreground">Muted</p>
            <p className="text-xs text-muted-foreground">bg-muted</p>
          </div>
          
          <div className="space-y-2">
            <div className="h-20 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-medium">Accent (Blue-900)</span>
            </div>
            <p className="text-sm font-medium text-foreground">Accent - Blue-900</p>
            <p className="text-xs text-muted-foreground">bg-accent</p>
          </div>
          
          <div className="space-y-2">
            <div className="h-20 bg-destructive rounded-lg flex items-center justify-center">
              <span className="text-destructive-foreground font-medium">Destructive (Red-600)</span>
            </div>
            <p className="text-sm font-medium text-foreground">Destructive - Red-600</p>
            <p className="text-xs text-muted-foreground">bg-destructive</p>
          </div>
          
          <div className="space-y-2">
            <div className="h-20 bg-border rounded-lg"></div>
            <p className="text-sm font-medium text-foreground">Border</p>
            <p className="text-xs text-muted-foreground">bg-border</p>
          </div>
        </div>
      </section>

      {/* Text Colors Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Text Colors</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-card border border-border rounded-lg">
            <p className="text-foreground text-lg">Text Foreground - Màu chữ chính</p>
            <p className="text-muted-foreground">Text Muted Foreground - Màu chữ phụ</p>
            <p className="text-primary">Text Primary - Màu chữ đỏ (Red-600)</p>
            <p className="text-secondary-foreground">Text Secondary Foreground - Màu chữ thứ cấp</p>
            <p className="text-accent-foreground">Text Accent Foreground - Màu chữ xanh (Blue-900)</p>
            <p className="text-destructive">Text Destructive - Màu chữ đỏ cảnh báo (Red-600)</p>
          </div>
        </div>
      </section>

      {/* Button Variants Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Button Variants</h2>
        
        <div className="flex flex-wrap gap-4">
          <Button>Default (Red-600)</Button>
          <Button variant="secondary">Secondary (Blue-900)</Button>
          <Button variant="destructive">Destructive (Red-600)</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Form Elements Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Form Elements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">Input Field</label>
            <input 
              type="text" 
              placeholder="Nhập text..." 
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">Select Field</label>
            <select className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </section>

      {/* Card Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Card Components</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Card Title</h3>
            <p className="text-muted-foreground">Nội dung của card với màu sắc phù hợp với theme.</p>
          </div>
          
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Card Title</h3>
            <p className="text-muted-foreground">Nội dung của card với màu sắc phù hợp với theme.</p>
          </div>
          
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Card Title</h3>
            <p className="text-muted-foreground">Nội dung của card với màu sắc phù hợp với theme.</p>
          </div>
        </div>
      </section>

      {/* Color Comparison */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Red-600 vs Blue-900 Comparison</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Red-600 Theme Elements</h3>
            <div className="space-y-2">
              <div className="p-3 bg-primary text-white rounded">Primary Button</div>
              <div className="p-3 bg-destructive text-white rounded">Destructive Button</div>
              <div className="p-3 border border-primary rounded">Primary Border</div>
              <div className="p-3 text-primary">Primary Text</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent-foreground bg-accent p-2 rounded">Blue-900 Theme Elements</h3>
            <div className="space-y-2">
              <div className="p-3 bg-secondary text-secondary-foreground rounded">Secondary Button</div>
              <div className="p-3 bg-accent text-accent-foreground rounded">Accent Button</div>
              <div className="p-3 border border-accent rounded">Accent Border</div>
              <div className="p-3 text-accent-foreground">Accent Text</div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Values */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Color Values (OKLCH)</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Red-600 Values</h3>
            <div className="p-4 bg-card border border-border rounded-lg space-y-2">
              <p className="text-sm"><span className="font-medium">OKLCH:</span> oklch(0.577 0.245 27.325)</p>
              <p className="text-sm"><span className="font-medium">Lightness:</span> 57.7%</p>
              <p className="text-sm"><span className="font-medium">Chroma:</span> 0.245</p>
              <p className="text-sm"><span className="font-medium">Hue:</span> 27.325°</p>
              <p className="text-sm"><span className="font-medium">Usage:</span> Primary, Destructive</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent-foreground">Blue-900 Values</h3>
            <div className="p-4 bg-card border border-border rounded-lg space-y-2">
              <p className="text-sm"><span className="font-medium">OKLCH:</span> oklch(0.379 0.146 265.522)</p>
              <p className="text-sm"><span className="font-medium">Lightness:</span> 37.9%</p>
              <p className="text-sm"><span className="font-medium">Chroma:</span> 0.146</p>
              <p className="text-sm"><span className="font-medium">Hue:</span> 265.522°</p>
              <p className="text-sm"><span className="font-medium">Usage:</span> Secondary, Accent</p>
            </div>
          </div>
        </div>
      </section>

      {/* OKLCH Explanation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">OKLCH Color Space Explanation</h2>
        
        <div className="p-6 bg-card border border-border rounded-lg space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">OKLCH Components:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><span className="font-medium text-foreground">L (Lightness):</span> Độ sáng từ 0% (đen) đến 100% (trắng)</li>
              <li><span className="font-medium text-foreground">C (Chroma):</span> Độ bão hòa màu sắc, 0 = xám, cao hơn = màu sắc rõ nét hơn</li>
              <li><span className="font-medium text-foreground">H (Hue):</span> Góc màu sắc từ 0° đến 360°</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Our Color Values:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-primary">Red-600: oklch(0.577 0.245 27.325)</p>
                <p className="text-sm text-muted-foreground">- Lightness: 57.7% (trung bình)</p>
                <p className="text-sm text-muted-foreground">- Chroma: 0.245 (bão hòa cao)</p>
                <p className="text-sm text-muted-foreground">- Hue: 27.325° (đỏ cam)</p>
              </div>
              <div>
                <p className="font-medium text-accent-foreground">Blue-900: oklch(0.379 0.146 265.522)</p>
                <p className="text-sm text-muted-foreground">- Lightness: 37.9% (tối)</p>
                <p className="text-sm text-muted-foreground">- Chroma: 0.146 (bão hòa trung bình)</p>
                <p className="text-sm text-muted-foreground">- Hue: 265.522° (xanh dương)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
