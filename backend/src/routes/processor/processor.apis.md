## Processor APIs

All processor routes are prefixed with `/api/processor`.

### Auth

- **Sign up**
  - **Method**: `POST`
  - **Path**: `/api/processor/auth/signup`
  - **Body** (JSON):
    - `email` (string, required)
    - `password` (string, required)
    - `name` (string, optional)
    - `address` (string, optional)
    - `organization` (string, optional)
    - `processorId` (string, required/unique logical ID)
  - **Response** (200):
    - `msg`: `"Processor account created successfully"`
    - `token`: JWT string

- **Login**
  - **Method**: `POST`
  - **Path**: `/api/processor/auth/login`
  - **Body** (JSON):
    - `email` (string, required)
    - `password` (string, required)
  - **Response** (200):
    - `msg`: `"Processor account login successfully"`
    - `token`: JWT string

### Processing Plant Info

- **Create/Update plant info**
  - **Method**: `POST`
  - **Path**: `/api/processor/plant`
  - **Auth**: `Authorization: Bearer <JWT>`
  - **Body** (JSON):
    - `estb` (string)
    - `GSTIN` (string)
    - `Storage` (string)
    - `herbs` (string)
  - **Response** (200):
    - `msg`: `"Processing plant info saved successfully"`
    - `data`: `ProcessingPlantInfo` object

- **Get plant info**
  - **Method**: `GET`
  - **Path**: `/api/processor/plant`
  - **Auth**: `Authorization: Bearer <JWT>`
  - **Response** (200):
    - `msg`: `"Processing plant info fetched successfully"`
    - `data`: `ProcessingPlantInfo` object

### Inventory

- **Create inventory**
  - **Method**: `POST`
  - **Path**: `/api/processor/inventory`
  - **Auth**: `Authorization: Bearer <JWT>`
  - **Body** (JSON):
    - `inventoryName` (string, required)
    - `assignedGrade` (string, required)
    - `processinglist` (string, optional)
    - `specie` (string, required)
    - `finalQuantity` (string, required)
    - `sendedToLab` (string, optional)
  - **Response** (201):
    - `msg`: `"Inventory created successfully"`
    - `data`: `ProcessorInventory` object

- **List inventories**
  - **Method**: `GET`
  - **Path**: `/api/processor/inventory`
  - **Auth**: `Authorization: Bearer <JWT>`
  - **Response** (200):
    - `msg`: `"Inventories fetched successfully"`
    - `data`: `ProcessorInventory[]`

- **Get inventory by ID**
  - **Method**: `GET`
  - **Path**: `/api/processor/inventory/:id`
  - **Auth**: `Authorization: Bearer <JWT>`
  - **Params**:
    - `id` (string, inventory ID)
  - **Response** (200):
    - `msg`: `"Inventory fetched successfully"`
    - `data`: `ProcessorInventory` object including `Items` (farmer inputs)

### Farmer Inputs

- **Add farmer input to inventory**
  - **Method**: `POST`
  - **Path**: `/api/processor/farmer-input`
  - **Auth**: `Authorization: Bearer <JWT>`
  - **Body** (JSON):
    - `inventoryID` (string, required, must belong to current processor)
    - `quantity` (string, required)
    - `eventId` (string, required, unique)
    - `specie` (string, optional)
  - **Response** (201):
    - `msg`: `"Farmer input added successfully"`
    - `data`: `ProcessorFarmerInput` object

- **List farmer inputs for an inventory**
  - **Method**: `GET`
  - **Path**: `/api/processor/farmer-input/inventory/:inventoryId`
  - **Auth**: `Authorization: Bearer <JWT>`
  - **Params**:
    - `inventoryId` (string, inventory ID belonging to processor)
  - **Response** (200):
    - `msg`: `"Farmer inputs fetched successfully"`
    - `data`: `ProcessorFarmerInput[]`

- **Get farmer input by event ID**
  - **Method**: `GET`
  - **Path**: `/api/processor/farmer-input/event/:eventId`
  - **Auth**: `Authorization: Bearer <JWT>`
  - **Params**:
    - `eventId` (string, unique farmer input event ID)
  - **Response** (200):
    - `msg`: `"Farmer input fetched successfully"`
    - `data`: `ProcessorFarmerInput` object


