import Link from 'next/link';
import { useData } from '../lib/dataContext';
import { APP_NAME } from '../lib/constants';

function countStatuses(list = []){
  return list.reduce((acc,item)=>{
    const key = (item.status || 'Pending').toLowerCase();
    if(key.includes('approve')) acc.approved +=1;
    else if(key.includes('acknowledge')) acc.acknowledged +=1;
    else if(key.includes('reject')) acc.rejected +=1;
    else acc.pending +=1;
    return acc;
  }, { approved:0, acknowledged:0, rejected:0, pending:0 });
}

export default function AdminPage(){
  const { farmers, processors, manufacturers, laboratories, complaints } = useData();

  const cards = [
    { title:'Farmers', href:'/farmers', data:farmers },
    { title:'Producers / Processors', href:'/processors', data:processors },
    { title:'Manufacturers', href:'/manufacturers', data:manufacturers },
    { title:'Laboratories', href:'/laboratories', data:laboratories },
  ];

  return (
    <div className="container">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="header" role="banner">
        <div>
          <h1 suppressHydrationWarning>{APP_NAME} Admin</h1>
          <p className="lead">Seeded data for Farmers, Producers, Manufacturers, Laboratories, and Complaints.</p>
        </div>
      </header>

      <main id="main" role="main">
        <div className="dashboard-grid">
          {cards.map(card=>{
            const counts = countStatuses(card.data);
            return (
              <Link href={card.href} key={card.href} className="stat-card">
                <div className="stat-title">{card.title}</div>
                <div className="stat-row"><span>Pending (लंबित)</span><strong>{counts.pending}</strong></div>
                <div className="stat-row"><span>Approved (स्वीकृत)</span><strong>{counts.approved}</strong></div>
                <div className="stat-row"><span>Acknowledged (स्वीकार)</span><strong>{counts.acknowledged}</strong></div>
                <div className="stat-row"><span>Rejected (अस्वीकृत)</span><strong>{counts.rejected}</strong></div>
                <div className="stat-footer">View list →</div>
              </Link>
            );
          })}
          <Link href="/complaints" className="stat-card highlighted">
            <div className="stat-title">Complaints (शिकायतें)</div>
            <div className="stat-row"><span>Open</span><strong>{complaints.filter(c=>c.status.toLowerCase() === 'pending').length}</strong></div>
            <div className="stat-row"><span>Resolved</span><strong>{complaints.filter(c=>c.status.toLowerCase() === 'resolved').length}</strong></div>
            <div className="stat-footer">Manage complaints →</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
