import RegistrationTable from '../components/RegistrationTable';
import { useData } from '../lib/dataContext';

export default function ProcessorsPage(){
  const { processors, updateStatus } = useData();

  return (
    <div className="container">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="header">
        <h1>Producers / Processors</h1>
        <p className="lead">Approve, acknowledge, or reject producer/processor registrations.</p>
      </header>
      <main id="main">
        <RegistrationTable
          registrations={processors}
          entity="processor"
          onStatusChange={(id,status)=>updateStatus('processors', id, status)}
        />
      </main>
    </div>
  );
}
