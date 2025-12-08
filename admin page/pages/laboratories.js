import RegistrationTable from '../components/RegistrationTable';
import { useData } from '../lib/dataContext';

export default function LaboratoriesPage(){
  const { laboratories, updateStatus } = useData();

  return (
    <div className="container">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="header">
        <h1>Laboratories</h1>
        <p className="lead">Approve, acknowledge, or reject laboratory registrations.</p>
      </header>
      <main id="main">
        <RegistrationTable
          registrations={laboratories}
          entity="laboratory"
          onStatusChange={(id,status)=>updateStatus('laboratories', id, status)}
        />
      </main>
    </div>
  );
}
