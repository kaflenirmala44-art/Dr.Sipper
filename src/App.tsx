/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Package, 
  Users, 
  Factory, 
  Scale, 
  BarChart3, 
  Rocket, 
  ShieldCheck, 
  Globe, 
  AppWindow, 
  DollarSign, 
  PenTool, 
  Truck,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Clock,
  Presentation,
  FlaskConical,
  Dumbbell,
  GraduationCap,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

// --- Types ---

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

// --- Icons ---
const SidebarIcon = ({ icon: Icon }: { icon: any }) => <Icon size={20} className="mr-3" />;

// --- Data ---
const SECTIONS: Section[] = [
  { id: 'identity', title: '1. Company Identity', icon: <SidebarIcon icon={Target} /> },
  { id: 'business-model', title: '2. Business Model', icon: <SidebarIcon icon={BarChart3} /> },
  { id: 'products', title: '3. Product Line', icon: <SidebarIcon icon={Package} /> },
  { id: 'branding', title: '4. Branding System', icon: <SidebarIcon icon={PenTool} /> },
  { id: 'org', title: '5. Organizational Structure', icon: <SidebarIcon icon={Users} /> },
  { id: 'manufacturing', title: '6. Manufacturing', icon: <SidebarIcon icon={Factory} /> },
  { id: 'legal', title: '7. Legal & Compliance', icon: <SidebarIcon icon={Scale} /> },
  { id: 'market', title: '8. Market Research', icon: <SidebarIcon icon={TrendingUp} /> },
  { id: 'marketing', title: '9. Marketing Masterplan', icon: <SidebarIcon icon={AppWindow} /> },
  { id: 'sales', title: '10. Sales & Distribution', icon: <SidebarIcon icon={Truck} /> },
  { id: 'financials', title: '11. Financial Model', icon: <SidebarIcon icon={DollarSign} /> },
  { id: 'tech', title: '12. Technology Stack', icon: <SidebarIcon icon={Lightbulb} /> },
  { id: 'risk', title: '13. Risk Management', icon: <SidebarIcon icon={ShieldCheck} /> },
  { id: 'expansion', title: '14. Expansion Plan', icon: <SidebarIcon icon={Globe} /> },
  { id: 'pitch', title: '15. Investor Pitch Deck', icon: <SidebarIcon icon={Presentation} /> },
  { id: 'roadmap', title: '16. Execution Roadmap', icon: <SidebarIcon icon={Clock} /> },
  { id: 'appendix', title: '17. Appendix & Checklists', icon: <SidebarIcon icon={CheckCircle2} /> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('identity');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Auto-close sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'identity': return <CompanyIdentity />;
      case 'business-model': return <BusinessModel />;
      case 'products': return <ProductLine />;
      case 'branding': return <BrandingSystem />;
      case 'org': return <OrgStructure />;
      case 'manufacturing': return <ManufacturingStructure />;
      case 'legal': return <LegalCompliance />;
      case 'market': return <MarketResearch />;
      case 'marketing': return <MarketingMasterplan />;
      case 'sales': return <SalesDistribution />;
      case 'financials': return <FinancialModel />;
      case 'tech': return <TechStack />;
      case 'risk': return <RiskManagement />;
      case 'expansion': return <ExpansionPlan />;
      case 'pitch': return <PitchDeck />;
      case 'roadmap': return <ExecutionRoadmap />;
      case 'appendix': return <Appendix />;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-xl lg:hidden hover:bg-blue-700 transition-all active:scale-95"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? '320px' : '0px', opacity: isSidebarOpen ? 1 : 0 }}
        className="h-full bg-white border-r border-slate-200 overflow-y-auto overflow-x-hidden flex-shrink-0 z-40 sidebar-scroll shadow-sm"
      >
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D.</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">Dr.Sipper</h1>
          </div>
          
          <nav className="space-y-1">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={cn(
                  "w-full flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200",
                  activeTab === section.id 
                    ? "bg-blue-50 text-blue-700 shadow-sm" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                )}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </nav>

          <div className="mt-12 p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 text-center">Version 1.0.0</p>
            <p className="text-sm text-slate-600 leading-relaxed text-center italic">"Redefining Hydration for the Global Youth."</p>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white/50 relative scroll-smooth overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// --- Section Components (to be populated with heavy content) ---

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-500 max-w-3xl leading-relaxed">{subtitle}</p>}
    <div className="h-1 w-24 bg-blue-600 rounded-full mt-6"></div>
  </div>
);

const Card = ({ children, title, className }: { children: React.ReactNode, title?: string, className?: string }) => (
  <div className={cn("bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", className)}>
    {title && <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center">{title}</h3>}
    {children}
  </div>
);

// --- 1. COMPANY IDENTITY ---
const CompanyIdentity = () => (
  <section className="space-y-12">
    <SectionHeader 
      title="Company Identity" 
      subtitle="Defining the fundamental DNA of Dr.Sipper — where science meets refreshment and brand myth meets consumer reality." 
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card title="Mission & Vision">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">The Mission</span>
            <p className="mt-2 text-slate-700 leading-relaxed font-medium text-lg">
              "To revolutionize the global beverage industry by engineering high-performance, taste-forward hydration solutions that empower the next generation to live better, sip smarter, and achieve more."
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">The Vision</span>
            <p className="mt-2 text-slate-700 leading-relaxed font-medium text-lg">
              "To be the world's most trusted and culturally dominant beverage ecosystem by 2035, synonymous with innovation, wellness, and youth-led progress."
            </p>
          </div>
        </div>
      </Card>

      <Card title="Brand Philosophy">
        <p className="text-slate-600 leading-relaxed">
          <span className="font-bold text-slate-900 block mb-2">Scientific Playfulness.</span>
          Dr.Sipper bridges the gap between 'boring' health drinks and 'guilty' sodas. We utilize molecular taste optimization and bio-available nutrients to create drinks that taste like a party but work like a lab-formulated fuel.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Innovative', 'Transparent', 'Bold', 'Inclusive', 'Resilient'].map(val => (
            <span key={val} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">{val}</span>
          ))}
        </div>
      </Card>
    </div>

    <Card title="Psychological Appeal: Why 'Dr.Sipper' Works">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-blue-600 mb-2">Authority & Trust</h4>
          <p className="text-sm text-slate-600">The "Dr." prefix subconsciously signals expertise, research-backed quality, and safety in an era of functional skepticism.</p>
        </div>
        <div>
          <h4 className="font-bold text-blue-600 mb-2">Approachable Action</h4>
          <p className="text-sm text-slate-600">"Sipper" implies a lifestyle habit—accessible, relaxing, and everyday. It transforms the beverage from a one-time purchase to a constant companion.</p>
        </div>
        <div>
          <h4 className="font-bold text-blue-600 mb-2">Phonetic Memory</h4>
          <p className="text-sm text-slate-600">The plosive 'P' and rhythmic cadence make it sticky (The "Sizzle" Factor). It's easy for global markets to pronounce.</p>
        </div>
      </div>
    </Card>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card title="Brand Personality">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
            <p className="text-slate-700"><strong>The Visionary Nerd:</strong> Extremely smart about ingredients but knows how to throw the best house party.</p>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
            <p className="text-slate-700"><strong>The High-Achiever:</strong> Athletic, focused, but never stressed.</p>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
            <p className="text-slate-700"><strong>The Transparent Rebel:</strong> Calls out industry fake-health claims and shows exactly what's inside the bottle.</p>
          </li>
        </ul>
      </Card>

      <Card title="Slogan Options (Top 20 Highlights)">
        <div className="grid grid-cols-2 gap-3">
          {[
            "Sip the Future.", "Your Daily Genius.", "Smart Hydration. Zero Guilt.", 
            "The Molecule of Refreshment.", "Prescribed for Perfection.", 
            "Fuel Your Ambition.", "Taste the Lab-Crafted Magic.",
            "Sipper's Logic. Nature's Magic.", "Evolution in a Bottle.", "Smart. Fresh. Dr.Sipper."
          ].map((tag, i) => (
            <div key={i} className="text-xs font-medium text-slate-500 border-l-2 border-slate-100 pl-2 py-1">{tag}</div>
          ))}
        </div>
      </Card>
    </div>
  </section>
);

// --- 2. BUSINESS MODEL ---
const BusinessModel = () => (
  <section className="space-y-12">
    <SectionHeader title="Business Model" subtitle="The Dr.Sipper monetization architecture — how we extract value while delivering superior hydration." />
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card title="Revenue Model" className="lg:col-span-1">
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl">
            <h4 className="font-bold text-sm text-slate-800">Unit Sales</h4>
            <p className="text-xs text-slate-500 mt-1">Direct margins from physical retail and e-commerce transactions.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <h4 className="font-bold text-sm text-slate-800">Subscription (D2C)</h4>
            <p className="text-xs text-slate-500 mt-1">Monthly "Hydration Bundles" curated for student/office lifestyles.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <h4 className="font-bold text-sm text-slate-800">B2B Institutional</h4>
            <p className="text-xs text-slate-500 mt-1">Bulk catering for tech offices, gym chains, and elite universities.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <h4 className="font-bold text-sm text-slate-800">Franchise & Licensing</h4>
            <p className="text-xs text-slate-500 mt-1">Long-term global expansion through localized bottling partners.</p>
          </div>
        </div>
      </Card>

      <Card title="Pricing Logic" className="lg:col-span-2">
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              We employ a <strong>"Premium Penetration"</strong> strategy. Our pricing is 15-20% higher than mass-market sodas, positioning us alongside premium hydration brands (e.g., Prime, Vitamin Water) but slightly more accessible to maintain daily volume.
            </p>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 pt-0">Tier</th>
                  <th className="pb-3 pt-0">Target Price</th>
                  <th className="pb-3 pt-0">Target Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-3">Standard (330ml Can)</td><td className="py-3">$2.49</td><td className="py-3">65%</td></tr>
                <tr><td className="py-3">Functional (500ml Bottle)</td><td className="py-3">$3.99</td><td className="py-3">72%</td></tr>
                <tr><td className="py-3">Limited Edition (Glass)</td><td className="py-3">$7.50</td><td className="py-3">85%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>

    <Card title="Distribution Channels">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: Globe, label: 'E-commerce', desc: 'Direct-to-consumer store with sub options' },
          { icon: Building2, label: 'Retail Chains', desc: 'Placement in Target, 7-Eleven, Whole Foods' },
          { icon: GraduationCap, label: 'Campuses', desc: 'Vending machines in 500+ Ivy/State universities' },
          { icon: Dumbbell, label: 'Fitness Center', desc: 'Protein & hydration partnerships with Equinox, Gold Gym' }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="text-center p-4 border border-slate-100 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon size={24} />
              </div>
              <h5 className="font-bold text-slate-800 text-sm mb-1">{item.label}</h5>
              <p className="text-[10px] text-slate-500 uppercase tracking-tight">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </Card>
  </section>
);

// --- 3. PRODUCT LINE ---
const ProductLine = () => (
  <section className="space-y-12">
    <SectionHeader title="Product Line Architecture" subtitle="A multi-tier beverage ecosystem spanning hydration, performance, and indulgence. 50+ SKU pipeline planned." />
    
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCategory 
          title="Core Hydration" 
          count="15 SKUs" 
          desc="Low-calorie electrolyte waters for daily use. Focus on bioavailability."
          accent="bg-blue-500"
        />
        <ProductCategory 
          title="Performance Elite" 
          count="12 SKUs" 
          desc="Nootropic energy and protein-infused recovery. No crash formula."
          accent="bg-orange-500"
        />
        <ProductCategory 
          title="Botanical Brews" 
          count="10 SKUs" 
          desc="Iced teas and sparkling herbals for wellness and zen state."
          accent="bg-emerald-500"
        />
      </div>

      <Card title="Signature Product Spotlight">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/3 bg-slate-50 rounded-3xl aspect-[3/4] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/10 group-hover:scale-110 transition-transform duration-500" />
            <div className="z-10 text-center">
               <Package size={120} className="text-blue-600" />
               <p className="mt-4 font-bold text-slate-400 font-mono">[DR.SIPPER ORIGINAL]</p>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h4 className="text-3xl font-black text-slate-800">Electric Blue Nootropic</h4>
              <p className="text-blue-600 font-bold uppercase tracking-wider text-xs">Category: Performance | Flavor: Glacier Berry</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                <span className="text-[10px] uppercase font-bold text-slate-400">USP</span>
                <p className="text-sm font-semibold">Zero Crash proprietary caffeine delivery + L-Theanine + Magnesium.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                <span className="text-[10px] uppercase font-bold text-slate-400">Audience</span>
                <p className="text-sm font-semibold">Students, Gamers, Tech Workers (16-35).</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-4">
                "Engineered for deep focus. Real blueberries, Himalayan salt electrolytes, and 120mg of botanical caffeine. No taurine, no junk ingredients."
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold">$2.99 / 500ml</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">COGS: $0.42</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card title="The Pipeline (Expansion SKU List)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="space-y-4">
            <h5 className="font-bold text-slate-800 border-b pb-2">Hydration & Sport (20 SKUs)</h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
               <div>• Arctic Lime</div><div>• Desert Pear</div>
               <div>• Solar Citrus</div><div>• Moonwater (Nightly)</div>
               <div>• Electrolyte+ Strawberry</div><div>• Volcanic Blood Orange</div>
               <div>• Ionized Melon</div><div>• Deep Sea Ginger</div>
               <div>• Altitude Mango</div><div>• Rainforest Matcha</div>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-slate-800 border-b pb-2">Functional & Health (15 SKUs)</h5>
             <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
               <div>• Collagen Blossom</div><div>• Probiotic Peach</div>
               <div>• Immune Boost Zinc</div><div>• Omega-Mist</div>
               <div>• Adaptogen Lavender</div><div>• Vitamin D Sunshine</div>
               <div>• B12 Power Rush</div><div>• Turmeric Glow</div>
               <div>• Charcoal Detox</div><div>• Kale-Hydrate</div>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-slate-800 border-b pb-2">Indulgence & Youth (15 SKUs)</h5>
             <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
               <div>• Bubblegum Sparkle</div><div>• Cotton Candy Mist</div>
               <div>• Retro Root Beer</div><div>• Sour Apple Shot</div>
               <div>• Galactic Grape</div><div>• Peach Gummy</div>
               <div>• Marshmallow Milk (Tea)</div><div>• Toffee Coffee Nitro</div>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Seasonal Editions">
           <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2"><span>Summer Solstice</span><span className="text-orange-500 font-bold italic">Chilled Watermelon</span></div>
              <div className="flex justify-between border-b pb-2"><span>Winter Frost</span><span className="text-blue-400 font-bold italic">Spiced Cranberry</span></div>
              <div className="flex justify-between"><span>Festival Special</span><span className="text-purple-500 font-bold italic">Electric Lychee</span></div>
           </div>
        </Card>
        <Card title="Limited Region Specials">
           <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2"><span>Asia Exclusive</span><span className="font-bold">Durian Cream (Nitro)</span></div>
              <div className="flex justify-between border-b pb-2"><span>US West Coast</span><span className="font-bold">Cactus Pear Pear</span></div>
              <div className="flex justify-between"><span>Europe Exclusive</span><span className="font-bold">Elderflower Sparkle</span></div>
           </div>
        </Card>
      </div>
    </div>
  </section>
);

const ProductCategory = ({ title, count, desc, accent }: any) => (
  <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:translate-y-[-4px] transition-all duration-300">
    <div className={cn("w-12 h-1.5 rounded-full mb-4", accent)} />
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-xl font-bold text-slate-800">{title}</h4>
      <span className="text-xs font-black text-slate-300">{count}</span>
    </div>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

// --- 4. BRANDING SYSTEM ---
const BrandingSystem = () => (
  <section className="space-y-12">
    <SectionHeader title="Branding System" subtitle="The visual language of hydration. Science-inspired modernism meets high-energy pop." />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card title="Color Psychology">
        <div className="grid grid-cols-3 gap-4">
          {[
            { c: 'bg-[#0055FF]', n: 'Atomic Blue', u: 'Primary - Trust & Science' },
            { c: 'bg-[#00D084]', n: 'Fresh Mint', u: 'Secondary - Natural Renewal' },
            { c: 'bg-[#FF6D00]', n: 'Electric Orange', u: 'Accent - Bold Energy' },
            { c: 'bg-[#FFDE00]', n: 'Lumen Yellow', u: 'Accent - Joy & Focus' },
            { c: 'bg-[#F2F2F2]', n: 'Lab White', u: 'Background - Cleanliness' },
            { c: 'bg-[#1A1A1A]', n: 'Depth Black', u: 'Typography - Authority' }
          ].map(color => (
            <div key={color.n} className="space-y-2">
              <div className={cn("h-16 w-full rounded-xl shadow-inner", color.c)} />
              <p className="text-[10px] font-bold uppercase tracking-tight">{color.n}</p>
              <p className="text-[9px] text-slate-500 leading-tight">{color.u}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Typography & Visual Roots">
        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Primary Font (Headings)</span>
            <p className="text-2xl font-black italic text-slate-800 font-mono">DR.SIPPER MONOSPACE</p>
            <p className="text-xs text-slate-500 mt-1 italic leading-relaxed">Inspired by lab labeling systems and athletic bold aesthetics.</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Body Font</span>
            <p className="text-lg font-medium text-slate-700">Inter - Modern Sans</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Maximum legibility for ingredient lists and digital displays.</p>
          </div>
        </div>
      </Card>
    </div>

    <Card title="The Mascot: 'Molecule Mick'">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-lg">
           <PenTool className="text-white" size={40} />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Character Concept</h4>
          <p className="text-slate-600 leading-relaxed text-sm">
            A stylized, 3D animated atom with sunglasses. Mick appears on QR codes, limited editions, and social stickers. He explains the "Smart Science" behind the flavors in a 15-second TikTok series called "Mick's Lab Hits."
          </p>
        </div>
      </div>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DesignVariation title="Youth Edition" desc="High saturation, graffiti motifs, loud typography." tag="Loud & Proud" border="border-orange-500" />
      <DesignVariation title="Luxury/Elite" desc="Matt black finish, gold foil accents, glass bottles." tag="Refined Science" border="border-blue-900" />
      <DesignVariation title="Eco-Lite" desc="Textured paper labels, earthy pastels, wood caps." tag="Planet First" border="border-emerald-500" />
    </div>
  </section>
);

const DesignVariation = ({ title, desc, tag, border }: any) => (
  <div className={cn("p-6 rounded-2xl border-t-4 bg-white shadow-sm", border)}>
    <span className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">{tag}</span>
    <h5 className="font-bold text-slate-800 mb-2">{title}</h5>
    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

// --- 5. ORG STRUCTURE ---
const OrgStructure = () => (
  <section className="space-y-12">
    <SectionHeader title="Organizational Structure" subtitle="A high-efficiency hierarchy designed for rapid scaling and cross-functional innovation." />
    
    <Card title="The Executive Council (Year 1-2)">
      <div className="relative p-8 flex flex-col items-center">
        {/* CEO */}
        <div className="w-48 p-4 bg-blue-600 text-white rounded-xl text-center shadow-lg mb-12">
          <p className="font-bold">Chief Executive Officer</p>
          <p className="text-[10px] opacity-80 uppercase font-medium">Vision & Strategy</p>
        </div>

        {/* Level 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full relative">
           <div className="absolute top-[-48px] left-1/2 w-px h-12 bg-slate-200" />
           <div className="absolute top-[-36px] left-[12.5%] right-[12.5%] h-px bg-slate-200" />
           
           {[
             { title: 'COO', d: 'Operations & SCM' },
             { title: 'CMO', d: 'Brand & Viral Growth' },
             { title: 'CTO/R&D', d: 'Product Innovation' },
             { title: 'CFO', d: 'Capital & Finance' }
           ].map(item => (
             <div key={item.title} className="p-3 border border-slate-200 rounded-lg text-center bg-white shadow-sm relative">
                <div className="absolute top-[-12px] left-1/2 w-px h-3 bg-slate-200" />
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-[9px] text-slate-500 uppercase">{item.d}</p>
             </div>
           ))}
        </div>
      </div>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card title="Hiring Roadmap">
        <div className="space-y-6">
          <div>
            <h5 className="text-sm font-bold text-blue-600 mb-2">Phase 1: Foundation (Month 0-6)</h5>
            <p className="text-xs text-slate-500">Core leadership + 2 Brand Managers + 1 Logistics Lead + 1 Beverage Chemist.</p>
          </div>
          <div>
            <h5 className="text-sm font-bold text-blue-600 mb-2">Phase 2: Growth (Month 7-18)</h5>
            <p className="text-xs text-slate-500">Expansion of Sales Team (20 reps) + In-house Content Studio + Quality Control Lab Team.</p>
          </div>
        </div>
      </Card>

      <Card title="Department Roles & KPIs">
        <div className="text-sm space-y-3">
          <div className="flex justify-between border-b border-slate-50 pb-2">
            <span className="font-semibold">Marketing</span>
            <span className="text-xs text-slate-400">CAC / Viral Reach</span>
          </div>
          <div className="flex justify-between border-b border-slate-50 pb-2">
            <span className="font-semibold">Supply Chain</span>
            <span className="text-xs text-slate-400">Inventory Turnover</span>
          </div>
          <div className="flex justify-between border-b border-slate-50 pb-2">
            <span className="font-semibold">R&D</span>
            <span className="text-xs text-slate-400">NPD Success Rate</span>
          </div>
          <div className="flex justify-between border-b border-slate-50 pb-2">
            <span className="font-semibold">Sales</span>
            <span className="text-xs text-slate-400">Shelf Velocity</span>
          </div>
        </div>
      </Card>
    </div>
  </section>
);

// --- 6. MANUFACTURING ---
const ManufacturingStructure = () => (
  <section className="space-y-12">
    <SectionHeader title="Manufacturing Structure" subtitle="From molecular engineering to high-speed bottling. Our production is built for safety and speed." />
    
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Step icon={Factory} title="Water Purification" step="01" />
        <Step icon={FlaskConical} title="Concentrate Mixing" step="02" />
        <Step icon={AppWindow} title="Carbonation/Filling" step="03" />
        <Step icon={ShieldCheck} title="Quality Seal" step="04" />
      </div>

      <Card title="The Production Workflow (Detailed SOP)">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <h5 className="font-bold text-blue-600 underline underline-offset-4 decoration-bullet">Step 1: Raw Material Sourcing</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strategic partnerships with fruit pulp suppliers from Brazil and electrolyte mineral labs from Switzerland. All water is processed via 7-stage RO and UV sterilization.
              </p>
            </div>
            <div className="flex-1 space-y-4">
               <h5 className="font-bold text-blue-600 underline underline-offset-4">Step 2: Batch Processing</h5>
               <p className="text-sm text-slate-600 leading-relaxed">
                Automated syrup mixing using "Taste-Sync" technology to ensure flavor consistency to the micro-gram across global batches. Temperature-controlled stainless steel vats.
               </p>
            </div>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
             <h5 className="font-bold text-slate-800 mb-2">Cold Chain Logistics Requirements</h5>
             <p className="text-sm text-slate-500 italic">
               *Note: 80% of our portfolio is ambient stable (shelf life 12 months). Probiotic line (Pro-Sipp) requires 2°C - 4°C strict cold chain monitoring.
             </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Machinery & Costs (Estimate)">
          <div className="text-xs space-y-3">
             <div className="flex justify-between"><span>Rotary Bottle Filler (50k/day)</span><span className="font-bold">$450,000</span></div>
             <div className="flex justify-between"><span>Lab-Grade Water Plant</span><span className="font-bold">$120,000</span></div>
             <div className="flex justify-between"><span>Shrink Wrapper & Labeler</span><span className="font-bold">$85,000</span></div>
             <div className="flex justify-between border-t pt-2 mt-2 font-bold text-blue-600"><span>Estimated CapEx</span><span>$655,000</span></div>
          </div>
        </Card>
        <Card title="Safety Certifications">
          <div className="flex flex-wrap gap-3">
             {['HACCP', 'ISO 22000', 'FDA Approved', 'FSSAI (Reg)', 'Halal Certified'].map(c => (
               <span key={c} className="px-3 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-lg text-[10px]">{c}</span>
             ))}
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const Step = ({ icon: Icon, title, step }: any) => (
  <div className="relative p-6 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden group">
    <div className="absolute top-2 right-2 text-4xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">{step}</div>
    <Icon className="text-blue-600 mb-4 relative z-10" size={32} />
    <h5 className="font-bold text-slate-800 relative z-10">{title}</h5>
  </div>
);

// --- 7. LEGAL & COMPLIANCE ---
const LegalCompliance = () => (
  <section className="space-y-12">
    <SectionHeader title="Legal & Compliance" subtitle="Operating within the highest standards of food safety, consumer protection, and trademark law." />
    <Card title="Compliance Checklist">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CheckItem title="Trademark Protection" desc="Dr.Sipper naming, 'Sip the Future' slogan, and Mick mascot registered in 45 primary jurisdictions." />
          <CheckItem title="Ingredient Labeling" desc="Strict adherence to FDA/EU labeling laws—full GMO disclosure and allergen warnings (Nut/Lactose)." />
          <CheckItem title="Sustainability Compliance" desc="Extended Producer Responsibility (EPR) certification for plastic recycling offsets." />
          <CheckItem title="Consumer Privacy" desc="GDPR/CCPA compliant D2C website architecture for subscription data storage." />
       </div>
    </Card>
  </section>
);

const CheckItem = ({ title, desc }: any) => (
  <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
     <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
     <div>
        <h5 className="text-sm font-bold text-slate-800 mb-1">{title}</h5>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
     </div>
  </div>
);

// --- 8. MARKET RESEARCH ---
const MarketResearch = () => (
  <section className="space-y-12">
    <SectionHeader title="Market Research" subtitle="Analyzing the terrain. Where giants are vulnerable and where Dr.Sipper disrupts." />
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card title="Market Sentiment" className="col-span-1">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: 'Health-Conscious', value: 45 },
                  { name: 'Flavor-First', value: 30 },
                  { name: 'Price-Sensitive', value: 25 }
                ]}
                cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value"
              >
                <Cell fill="#0055FF" />
                <Cell fill="#00D084" />
                <Cell fill="#CBD5E1" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-[10px] text-slate-400 text-center mt-2">Target Audience Psychographics</div>
      </Card>

      <Card title="SWOT Analysis" className="lg:col-span-2">
        <div className="grid grid-cols-2 gap-4">
           <SwotItem type="S" title="Strengths" content="Premium scientific vibe, proprietary lab tech, low sugar without bad aftertaste." />
           <SwotItem type="W" title="Weaknesses" content="Higher initial retail price, no existing massive supply chain network." />
           <SwotItem type="O" title="Opportunities" content="D2C subscription models, Gen Z's rejection of mass-market soda giants." />
           <SwotItem type="T" title="Threats" content="Aggressive pricing by giants, sudden ingredient supply shocks." />
        </div>
      </Card>
    </div>

    <Card title="Competitive Landscape (Comparison Table)">
       <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
             <thead className="bg-slate-50/50">
                <tr>
                   <th className="p-3">Brand</th>
                   <th className="p-3">Positioning</th>
                   <th className="p-3">Weakness</th>
                   <th className="p-3">Dr.Sipper Edge</th>
                </tr>
             </thead>
             <tbody>
                <tr className="border-b border-slate-100">
                   <td className="p-3 font-bold">Coke/Pepsi</td><td className="p-3">Global Mass</td><td className="p-3">High sugar, lack of health trust</td><td className="p-3">Actually Functional Nutrients</td>
                </tr>
                <tr className="border-b border-slate-100">
                   <td className="p-3 font-bold">Red Bull</td><td className="p-3">Insane Energy</td><td className="p-3">Chemical flavor, 'Nervous' energy</td><td className="p-3">Nootropic Focus (Clean Energy)</td>
                </tr>
                <tr className="border-b border-slate-100">
                   <td className="p-3 font-bold">Prime</td><td className="p-3">Influencer Hype</td><td className="p-3">Trend-reliant, questionable nutrition</td><td className="p-3">Longevity & Scientific Credibility</td>
                </tr>
             </tbody>
          </table>
       </div>
    </Card>
  </section>
);

const SwotItem = ({ type, title, content }: any) => {
  const colors = {
     S: 'bg-emerald-100 text-emerald-700',
     W: 'bg-red-100 text-red-700',
     O: 'bg-blue-100 text-blue-700',
     T: 'bg-orange-100 text-orange-700'
  } as any;
  return (
    <div className="p-4 border border-slate-100 rounded-xl">
       <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold mb-2 inline-block", colors[type])}>{title}</span>
       <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{content}</p>
    </div>
  );
};

// --- 9. MARKETING MASTERPLAN ---
const MarketingMasterplan = () => (
  <section className="space-y-12">
    <SectionHeader title="Marketing Masterplan" subtitle="Going viral by merit. We don't just buy ads; we build sub-cultures." />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <PhaseCard title="Awareness" desc="Social stunts, campus ambassadors, high-impact neon billboards." icon={Rocket} color="text-orange-500" />
       <PhaseCard title="Conversion" desc="Influencer tasting reviews, 1-for-1 college bundle deals." icon={TrendingUp} color="text-blue-500" />
       <PhaseCard title="Retention" desc="Dr.Sipper Lab Members Club, limited flavor voting." icon={ShieldCheck} color="text-emerald-500" />
    </div>

    <Card title="Marketing Content Engine (Target: 100+ Ideas)">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="space-y-4">
            <h5 className="font-bold text-sm text-blue-600 uppercase">Educational / Tech (34)</h5>
            <div className="text-[10px] space-y-2 text-slate-500 font-medium">
               <p>• "The science of osmotic pressure in hydration."</p>
               <p>• "Why natural monk fruit beats aspartame."</p>
               <p>• "The chemical structure of focus (Nootropic breakdown)."</p>
               <p>• "Water filtration: 7 levels of purity."</p>
               <p>• "Micro-gram precision in flavor synthesis."</p>
               <p>• "The Dr.Sipper Sustainability Report (Interactive)."</p>
               <p>• "Bio-available electrolytes vs. synthetic salts."</p>
            </div>
         </div>
         <div className="space-y-4">
            <h5 className="font-bold text-sm text-orange-600 uppercase">Lifestyle / Viral (33)</h5>
            <div className="text-[10px] space-y-2 text-slate-500 font-medium">
               <p>• "A Day in the life of a Sipper Ambassador."</p>
               <p>• "Sipper at the Summit: Mountain climbing series."</p>
               <p>• "Coding Fuel: 12-hour hackathon time-lapse."</p>
               <p>• "The Dr.Sipper 'Pop' Challenge (Audio Trend)."</p>
               <p>• "UGC: The most creative way to recycle our cans."</p>
               <p>• "Sipper-Cade: Retro game filter with Molecule Mick."</p>
               <p>• "Unboxing the Dr.Sipper Mystery Founders Box."</p>
            </div>
         </div>
         <div className="space-y-4">
            <h5 className="font-bold text-sm text-emerald-600 uppercase">Community / BTS (33)</h5>
            <div className="text-[10px] space-y-2 text-slate-500 font-medium">
               <p>• "Vote for the next Limited flavor: Yuzu or Lychee?"</p>
               <p>• "Behind the Lab: Meet the Beverage Chemists."</p>
               <p>• "Sipper Squad: Campus tour highlights."</p>
               <p>• "Founders' Log: The failure that led to our best recipe."</p>
               <p>• "Dr.Sipper HQ: Design process of the 500ml Bottle."</p>
               <p>• "Customer of the Month Spotlight."</p>
               <p>• "Interactive Map: Where is Sipper popping up next?"</p>
            </div>
         </div>
      </div>
    </Card>

    <div className="bg-blue-700 p-8 rounded-3xl text-white">
       <h4 className="text-xl font-bold mb-4">Viral Campaign Idea: "The $100k Lab Grant"</h4>
       <p className="text-sm opacity-90 leading-relaxed">
          Dr.Sipper will search for the smartest students in 10 countries. Nominate a project (Science, Art, or Tech). We fund the project and the student becomes a "Sipper Scientist" brand ambassador. High organic reach, massive brand equity.
       </p>
    </div>
  </section>
);

const PhaseCard = ({ title, desc, icon: Icon, color }: any) => (
  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
     <Icon className={cn("mb-4", color)} size={32} />
     <h5 className="font-bold mb-2">{title}</h5>
     <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

// --- 10. SALES & DISTRIBUTION ---
const SalesDistribution = () => (
  <section className="space-y-12">
    <SectionHeader title="Sales & Distribution" subtitle="The logistics of refreshment. Ensuring Dr.Sipper is never more than 5 minutes away." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       <Card title="Retail Strategy">
          <ul className="space-y-4 text-sm">
             <li className="flex gap-3">
                <MapPin className="text-blue-600 shrink-0" size={18} />
                <span><strong>Hyper-Local (Tier 1):</strong> Focus on high-footfall metro stations and mall kiosks.</span>
             </li>
             <li className="flex gap-3">
                <MapPin className="text-blue-600 shrink-0" size={18} />
                <span><strong>Regional (Tier 2):</strong> Expansion into state-wide supermarket chains.</span>
             </li>
          </ul>
       </Card>
       <Card title="Digital Sales">
          <ul className="space-y-4 text-sm">
             <li className="flex gap-3">
                <Globe className="text-emerald-600 shrink-0" size={18} />
                <span><strong>Web Store:</strong> Subscription bundles with 2-day delivery.</span>
             </li>
             <li className="flex gap-3">
                <AppWindow className="text-emerald-600 shrink-0" size={18} />
                <span><strong>Quick-Comm:</strong> 10-minute delivery via UberEats, DoorDash, Zomato.</span>
             </li>
          </ul>
       </Card>
    </div>
  </section>
);

// --- 11. FINANCIAL MODEL ---
const FinancialModel = () => (
  <section className="space-y-12">
    <SectionHeader title="Financial Model" subtitle="The engine of the enterprise. Realistic metrics for a multi-billion dollar trajectory." />
    
    <div className="grid grid-cols-1 gap-8">
       <Card title="Revenue Growth Projections (Year 1–5)">
          <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                   { year: 'Year 1', rev: 1.2, cost: 2.5 },
                   { year: 'Year 2', rev: 5.5, cost: 4.8 },
                   { year: 'Year 3', rev: 18.2, cost: 12.5 },
                   { year: 'Year 4', rev: 45.0, cost: 32.0 },
                   { year: 'Year 5', rev: 120.0, cost: 85.0 },
                ]}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
                   <XAxis dataKey="year" fontSize={10} axisLine={false} tickLine={false} />
                   <YAxis fontSize={10} axisLine={false} tickLine={false} label={{ value: '$ Millions', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                   <Tooltip />
                   <Line type="monotone" dataKey="rev" stroke="#0055FF" strokeWidth={3} name="Revenue" />
                   <Line type="monotone" dataKey="cost" stroke="#F43F5E" strokeWidth={2} name="Total Ops Cost" />
                </LineChart>
             </ResponsiveContainer>
          </div>
          <div className="text-center text-[10px] text-slate-400 mt-4 underline underline-offset-2">Assumption: 150% YoY increase in distribution points after Year 2.</div>
       </Card>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="Key Financial KPIs">
             <div className="space-y-4">
                <div className="flex justify-between items-end border-b pb-2">
                   <p className="text-xs text-slate-500">Gross Margin</p>
                   <p className="text-xl font-bold text-slate-800">68.5%</p>
                </div>
                <div className="flex justify-between items-end border-b pb-2">
                   <p className="text-xs text-slate-500">Customer Acquisition Cost (Avg)</p>
                   <p className="text-xl font-bold text-slate-800">$1.15</p>
                </div>
                <div className="flex justify-between items-end border-b pb-2">
                   <p className="text-xs text-slate-500">Customer Life Time Value (LTV)</p>
                   <p className="text-xl font-bold text-slate-800">$48.00</p>
                </div>
                <div className="flex justify-between items-end border-b pb-2">
                   <p className="text-xs text-slate-500">Break-even Point</p>
                   <p className="text-xl font-bold text-blue-600">Month 14</p>
                </div>
             </div>
          </Card>
          <Card title="Funding Requirement">
             <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-2xl">
                   <p className="text-xs font-bold text-slate-400 uppercase mb-1">Seed Round Ask</p>
                   <p className="text-3xl font-black text-slate-800">$2.5M <span className="text-sm font-medium text-slate-500">for 12% Equity</span></p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-bold">
                   <div className="p-2 border border-slate-100 rounded">Manufacturing (40%)</div>
                   <div className="p-2 border border-slate-100 rounded">Marketing (35%)</div>
                   <div className="p-2 border border-slate-100 rounded">R&D / Hiring (15%)</div>
                   <div className="p-2 border border-slate-100 rounded">Operations (10%)</div>
                </div>
             </div>
          </Card>
       </div>
    </div>
  </section>
);

// --- 12. TECH STACK ---
const TechStack = () => (
  <section className="space-y-12">
    <SectionHeader title="Technology Stack" subtitle="A digital-first approach to a physical beverage world." />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       <TechItem title="SAP / S4HANA" type="ERP" desc="Full supply chain and inventory management." />
       <TechItem title="Shopify Plus" type="E-om" desc="Scalable D2C web presence and subscriptions." />
       <TechItem title="Tableau" type="BI" desc="Real-time sales velocity visualization by region." />
       <TechItem title="Zendesk AI" type="Support" desc="Automated youth-friendly chat support." />
    </div>
  </section>
);

const TechItem = ({ title, type, desc }: any) => (
  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center">
     <div className="text-[10px] font-bold text-blue-600 uppercase mb-2">{type}</div>
     <h5 className="font-bold mb-2">{title}</h5>
     <p className="text-xs text-slate-500">{desc}</p>
  </div>
);

// --- 13. RISK MANAGEMENT ---
const RiskManagement = () => (
  <section className="space-y-12">
    <SectionHeader title="Risk Management" subtitle="Identifying and neutralizing threats before they impact the bottom line." />
    <div className="overflow-x-auto">
       <table className="w-full text-left text-sm border-separate border-spacing-y-4">
          <thead>
             <tr className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                <th className="px-6 pb-2">Risk Factor</th>
                <th className="px-6 pb-2">Severity</th>
                <th className="px-6 pb-2">Mitigation Strategy</th>
             </tr>
          </thead>
          <tbody>
             {[
               { r: 'Supply Chain Shock', s: 'High', m: 'Maintain 3 months raw material buffer; dual-sourcing strategy.' },
               { r: 'Regulatory Shift', s: 'Medium', m: 'In-house legal team monitoring global food safety daily.' },
               { r: 'Brand Controversy', s: 'High', m: 'Rapid response PR team + core transparency policy.' },
               { r: 'Contamination', s: 'Critical', m: 'Batch-level traceability via QR; 100% test-before-release SOP.' },
             ].map((row, i) => (
               <tr key={i} className="bg-white rounded-xl shadow-sm border border-slate-100">
                  <td className="px-6 py-4 font-bold border-t border-b border-l rounded-l-xl border-slate-100">{row.r}</td>
                  <td className="px-6 py-4 border-t border-b border-slate-100">
                     <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold", row.s === 'High' || row.s === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600')}>{row.s}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 leading-relaxed border-t border-b border-r rounded-r-xl border-slate-100">{row.m}</td>
               </tr>
             ))}
          </tbody>
       </table>
    </div>
  </section>
);

// --- 14. EXPANSION PLAN ---
const ExpansionPlan = () => (
  <section className="space-y-12">
    <SectionHeader title="Expansion Plan" subtitle="From city centers to global dominance. Our 4-phase rollout map." />
    <div className="relative border-l-2 border-slate-100 ml-4 py-4 space-y-12">
       {[
         { phase: 'Phase 1', title: 'Local Dominance (Months 1-12)', content: 'Focus on 5 major metro cities. Launch Core Hydration & Performance Elite. D2C website goes live.' },
         { phase: 'Phase 2', title: 'National Scale (Months 13-24)', content: 'Presence in 5,000+ retail points across the country. Launch Botanical Brews. Tier 1 gym partnerships.' },
         { phase: 'Phase 3', title: 'Continental Entry (Years 3-4)', content: 'Rollout in South Asia & Europe via licensed co-packers. Establishing regional warehouses.' },
         { phase: 'Phase 4', title: 'Global Presence (Year 5+)', content: 'Global brand household name status. IPO readiness or Strategic Acquisition.' },
       ].map((step, i) => (
         <div key={i} className="relative pl-10">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
            <span className="text-[10px] font-black text-blue-600 uppercase mb-1 block">{step.phase}</span>
            <h5 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h5>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">{step.content}</p>
         </div>
       ))}
    </div>
  </section>
);

// --- 15. PITCH DECK ---
const PitchDeck = () => (
  <section className="space-y-12">
    <SectionHeader title="Investor Pitch Deck" subtitle="The Dr.Sipper investment narrative — designed to close rounds." />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {[
         '1. The Problem', '2. The Missing Molecule', '3. Evolution of Hydration', '4. Traction & Momentum',
         '5. The SCM Edge', '6. The Social Viral Engine', '7. Financial Moat', '8. The Exit Dream'
       ].map(s => (
         <div key={s} className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm text-center font-bold text-xs text-slate-600 hover:border-blue-300 transition-colors cursor-default">
            {s}
         </div>
       ))}
    </div>
    <Card title="The Core Ask">
       <p className="text-slate-600 leading-relaxed italic text-center">
          "Join us in redefining the $400BN beverage industry. Dr.Sipper isn't just selling drinks; we're selling the future of human energy. We are raising $2.5M to achieve $5M in Year 1 revenue."
       </p>
    </Card>
  </section>
);

// --- 16. EXECUTION ROADMAP ---
const ExecutionRoadmap = () => (
  <section className="space-y-12">
    <SectionHeader title="Execution Roadmap" subtitle="Day 1 to Global Mastery. Let's get to work." />
    <div className="space-y-4">
       <div className="flex gap-4 items-center">
          <div className="w-24 text-sm font-bold text-slate-400">Week 1-4</div>
          <div className="flex-1 p-4 bg-slate-50 rounded-xl text-xs font-medium">Finalize flavor profiling with lab partner. Secure Dr.Sipper domain and trademarks.</div>
       </div>
       <div className="flex gap-4 items-center">
          <div className="w-24 text-sm font-bold text-slate-400">Week 5-12</div>
          <div className="flex-1 p-4 bg-slate-50 rounded-xl text-xs font-medium">Ordering primary machinery. Designing final label packaging mockups for feedback groups.</div>
       </div>
       <div className="flex gap-4 items-center">
          <div className="w-24 text-sm font-bold text-slate-400">Month 4</div>
          <div className="flex-1 p-4 bg-blue-600 text-white rounded-xl text-xs font-bold">ALPHA LAUNCH: Limited drop (10,000 units) to waitlist.</div>
       </div>
    </div>
  </section>
);

// --- 17. APPENDIX ---
const Appendix = () => (
  <section className="space-y-12">
    <SectionHeader title="Appendix & Checklists" subtitle="All the tactical details to ensure nothing slips through the cracks." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       <Card title="Launch Day Checklist">
          <ul className="space-y-2 text-xs text-slate-600">
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Website load testing complete.</li>
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> 50 influencers scheduled for 9 AM posts.</li>
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Inventory sync checked with Shopify/ERP.</li>
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Customer support team on high alert.</li>
          </ul>
       </Card>
       <Card title="Hiring Checklist (First 5)">
          <ul className="space-y-2 text-xs text-slate-600">
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Head of Flavor Engineering.</li>
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Viral Creative Director.</li>
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Supply Chain Architect.</li>
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Growth & Paid Ads Strategist.</li>
             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Chief of Stuff (Ops Generalist).</li>
          </ul>
       </Card>
    </div>
    <div className="text-center p-12 border-2 border-dashed border-slate-200 rounded-3xl">
       <p className="text-slate-400 font-bold uppercase tracking-widest mb-2">Internal Use Only</p>
       <h4 className="text-3xl font-black text-slate-200">DR.SIPPER STRATEGY 2026</h4>
    </div>
  </section>
);
