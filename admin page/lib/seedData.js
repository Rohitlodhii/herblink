const pending = 'Pending';

const farmers = [
  { id: 'F001', type: 'Farmer', name: 'Rohit Lodhi', email: 'rohit lodhi', phone: '+91 90099 08984', location: 'Dehradun, uttarakhand', status: pending, submission: 'Organic wheat cluster', created_at: '2025-12-08' },
  { id: 'F002', type: 'Farmer', name: 'Priya Patil', email: 'priya.patil@example.in', phone: '+91 98927 10002', location: 'Kolhapur, Maharashtra', status: pending, submission: 'Sugarcane drip irrigation', created_at: '2025-11-02' },
  { id: 'F003', type: 'Farmer', name: 'Neeraj Kumar', email: 'neeraj.kumar@example.in', phone: '+91 98730 10003', location: 'Patna, Bihar', status: pending, submission: 'Maize seed production', created_at: '2025-11-03' },
  { id: 'F004', type: 'Farmer', name: 'Suman Reddy', email: 'suman.reddy@example.in', phone: '+91 98490 10004', location: 'Nellore, Andhra Pradesh', status: pending, submission: 'Aqua-feed cultivation', created_at: '2025-11-04' },
  { id: 'F005', type: 'Farmer', name: 'Kavita Singh', email: 'kavita.singh@example.in', phone: '+91 98110 10005', location: 'Varanasi, Uttar Pradesh', status: pending, submission: 'Vegetable polyhouse', created_at: '2025-11-05' },
  { id: 'F006', type: 'Farmer', name: 'Arjun Nair', email: 'arjun.nair@example.in', phone: '+91 98954 10006', location: 'Kochi, Kerala', status: pending, submission: 'Spice value addition', created_at: '2025-11-06' }
];

const manufacturers = [
  { id: 'M001', type: 'Manufacturer', name: 'Ananya Industries', email: 'contact@ananya.in', phone: '+91 74282 20001', location: 'Pune, Maharashtra', status: pending, license: 'MH-MFG-2025-01', submission: 'Ready-to-eat millet snacks', created_at: '2025-11-02' },
  { id: 'M002', type: 'Manufacturer', name: 'Bharat Nutrients', email: 'hello@bharatnutrients.in', phone: '+91 79901 20002', location: 'Ahmedabad, Gujarat', status: pending, license: 'GJ-MFG-2025-02', submission: 'Fortified wheat flour line', created_at: '2025-11-03' },
  { id: 'M003', type: 'Manufacturer', name: 'Dakshin Foods', email: 'info@dakshinfoods.in', phone: '+91 91210 20003', location: 'Hyderabad, Telangana', status: pending, license: 'TS-MFG-2025-03', submission: 'Spice blend packaging', created_at: '2025-11-04' },
  { id: 'M004', type: 'Manufacturer', name: 'Eastern Harvest', email: 'support@easternharvest.in', phone: '+91 90320 20004', location: 'Kolkata, West Bengal', status: pending, license: 'WB-MFG-2025-04', submission: 'Tea processing and packing', created_at: '2025-11-05' },
  { id: 'M005', type: 'Manufacturer', name: 'Northfield Agro', email: 'care@northfieldagro.in', phone: '+91 99880 20005', location: 'Ludhiana, Punjab', status: pending, license: 'PB-MFG-2025-05', submission: 'Oilseed refining unit', created_at: '2025-11-06' },
  { id: 'M006', type: 'Manufacturer', name: 'Sarovar Foods', email: 'hello@sarovarfoods.in', phone: '+91 98183 20006', location: 'Jaipur, Rajasthan', status: pending, license: 'RJ-MFG-2025-06', submission: 'Dairy powder line', created_at: '2025-11-07' }
];

const processors = [
  { id: 'P001', type: 'Processor', name: 'Ganga Agro Mills', email: 'hello@gangaagro.in', phone: '+91 98000 30001', location: 'Varanasi, Uttar Pradesh', status: pending, submission: 'Cold-pressed oil unit', created_at: '2025-11-02' },
  { id: 'P002', type: 'Processor', name: 'Kaveri Foods', email: 'contact@kaverifoods.in', phone: '+91 98100 30002', location: 'Mysuru, Karnataka', status: pending, submission: 'Fruit pulp processing', created_at: '2025-11-03' },
  { id: 'P003', type: 'Processor', name: 'Sabarmati Produce', email: 'support@sabarmatiproduce.in', phone: '+91 98200 30003', location: 'Gandhinagar, Gujarat', status: pending, submission: 'Pulse cleaning and grading', created_at: '2025-11-04' },
  { id: 'P004', type: 'Processor', name: 'Teesta Essentials', email: 'info@teestaessentials.in', phone: '+91 98300 30004', location: 'Siliguri, West Bengal', status: pending, submission: 'Tea leaf primary processing', created_at: '2025-11-05' },
  { id: 'P005', type: 'Processor', name: 'Godavari Naturals', email: 'hello@godavarinaturals.in', phone: '+91 98400 30005', location: 'Rajahmundry, Andhra Pradesh', status: pending, submission: 'Jaggery block unit', created_at: '2025-11-06' },
  { id: 'P006', type: 'Processor', name: 'Narmada Organics', email: 'care@narmadaorganics.in', phone: '+91 98500 30006', location: 'Indore, Madhya Pradesh', status: pending, submission: 'Soy processing cluster', created_at: '2025-11-07' }
];

const laboratories = [
  { id: 'L001', type: 'Laboratory', name: 'Mumbai Food Lab', email: 'info@mumbaifoodlab.in', phone: '+91 97000 40001', location: 'Mumbai, Maharashtra', status: pending, submission: 'Microbiology panel setup', created_at: '2025-11-02' },
  { id: 'L002', type: 'Laboratory', name: 'Delhi Assurance Labs', email: 'contact@delhiasl.in', phone: '+91 97100 40002', location: 'New Delhi, Delhi', status: pending, submission: 'Residue testing expansion', created_at: '2025-11-03' },
  { id: 'L003', type: 'Laboratory', name: 'Namma Labs', email: 'support@nammalabs.in', phone: '+91 97200 40003', location: 'Bengaluru, Karnataka', status: pending, submission: 'Shelf-life validation facility', created_at: '2025-11-04' },
  { id: 'L004', type: 'Laboratory', name: 'Chennai Analytics', email: 'hello@chennaianalytics.in', phone: '+91 97300 40004', location: 'Chennai, Tamil Nadu', status: pending, submission: 'Nutritional profiling line', created_at: '2025-11-05' },
  { id: 'L005', type: 'Laboratory', name: 'Gujarat Quality Labs', email: 'team@gqlabs.in', phone: '+91 97400 40005', location: 'Vadodara, Gujarat', status: pending, submission: 'Water activity testing', created_at: '2025-11-06' },
  { id: 'L006', type: 'Laboratory', name: 'Kashi Analytical', email: 'contact@kashianalytical.in', phone: '+91 97500 40006', location: 'Varanasi, Uttar Pradesh', status: pending, submission: 'Heavy metal analysis', created_at: '2025-11-07' }
];

const complaints = [
  { id: 'C001', ticket: 'C-1101', name: 'Shivangi Rao', description: 'Delay in inspection scheduling for processor registration.', status: pending, submitted_at: '2025-11-06' },
  { id: 'C002', ticket: 'C-1102', name: 'Manoj Pillai', description: 'Need clarification on lab testing fees.', status: pending, submitted_at: '2025-11-07' },
  { id: 'C003', ticket: 'C-1103', name: 'Farida Khan', description: 'Portal not allowing document upload for manufacturer license.', status: pending, submitted_at: '2025-11-08' }
];

export default {
  farmers,
  manufacturers,
  processors,
  laboratories,
  complaints
};

