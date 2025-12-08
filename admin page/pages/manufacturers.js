import RegistrationTable from '../components/RegistrationTable';
import { useData } from '../lib/dataContext';

export default function ManufacturersPage(){
  const { manufacturers, updateStatus } = useData();

  return (
    <div className="container">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="header">
        <h1>Manufacturers</h1>
        <p className="lead">Approve, acknowledge, or reject manufacturer registrations.</p>
      </header>
      <main id="main">
        <RegistrationTable
          registrations={manufacturers}
          entity="manufacturer"
          onStatusChange={(id,status)=>updateStatus('manufacturers', id, status)}
        />
      </main>
    </div>
  );
}
