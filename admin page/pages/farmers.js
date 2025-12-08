import RegistrationTable from '../components/RegistrationTable';
import { useData } from '../lib/dataContext';

export default function FarmersPage(){
  const { farmers, updateStatus } = useData();

  return (
    <div className="container">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="header">
        <h1>Farmers</h1>
        <p className="lead">Approve, acknowledge, or reject farmer registrations.</p>
      </header>
      <main id="main">
        <RegistrationTable
          registrations={farmers}
          entity="farmer"
          onStatusChange={(id,status)=>updateStatus('farmers', id, status)}
        />
      </main>
    </div>
  );
}
