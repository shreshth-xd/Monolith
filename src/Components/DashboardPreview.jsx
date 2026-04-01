import unnamed from '../assets/unnamed.png';
import Serenity from '../assets/Serenity.png';
import Optimising from '../assets/Optimising_Workflow.png';

const SidebarLink = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-white/5 text-white' : 'text-[#888888] hover:text-white'}`}>
    <span className="material-icons text-sm">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const DashboardPreview = () => {
  
  const contentItems = [
    { id: 1, title: 'How to Build a Content System', status: 'Drafted', time: '2h ago' , img: unnamed},
    { id: 2, title: 'The Future of Content Creation', status: 'Published', time: '1d ago' , img: Serenity},
    { id: 3, title: '10 Tips for Better Writing', status: 'Scheduled', time: '3d ago' , img: Optimising},
  ];
  
  return (
    <section className="py-32 px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Designed for Focus</h2>
        <p className="text-[#888888]">A workspace that disappears, leaving only you and your creative vision.</p>
      </div>
      <div className="max-w-6xl mx-auto bg-[#131313] rounded-3xl border border-white/5 overflow-hidden flex h-[600px] shadow-2xl">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 flex flex-col p-8 bg-[#1B1B1B]">
           <div className="mb-12">
             <p className="text-xs font-black uppercase tracking-widest opacity-40">Editorial</p>
           </div>
           <div className="space-y-2 flex-grow">
             <SidebarLink icon="description" label="Pages" active />
             <SidebarLink icon="images" label="Media" />
             <SidebarLink icon="analytics" label="Analytics" />
             <SidebarLink icon="settings" label="Settings" />
           </div>
           <button className="w-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest font-bold py-3 rounded transition-all">
             New Post
           </button>
        </aside>
        
        {/* Content */}
        <main className="flex-grow p-12 overflow-y-auto">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-bold">Content Library</h3>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10"><span className="material-icons text-sm">search</span></div>
               <div className="w-10 h-10 rounded-full bg-white/5 overflow-hidden border border-white/10"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {contentItems.map(i => (
              <div key={i.id} className="bg-[#1B1B1B] border border-white/5 rounded-xl overflow-hidden group hover:border-white/20 transition-all">
                <div className="h-32 bg-[#252525]">
                  <img src={i.img} alt={i.title} className="w-full h-full object-cover" />
                </div>
                 
                 <div className="p-5">
                    <div className="h-4 w-full text-wrap rounded mb-4 text-left text-[14px]">{i.title}</div>     
                    <div className="flex justify-between items-center opacity-50">
                       <span className="text-[10px] uppercase">{i.status}</span>
                       <span className="text-[10px] uppercase">{i.time}</span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default DashboardPreview;