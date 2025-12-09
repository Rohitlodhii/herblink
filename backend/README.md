# Backend API Endpoints

All routes are served under the base path `'/api'`.

Authentication uses JWT. When a route indicates `Auth: Required`, include header `Authorization: Bearer <JWT>`.

## Manufacturer

### Auth
- POST `/api/manufacturer/auth/signup`
  - Body:
    ```json
    {
      "email": "string",
      "password": "string",
      "name": "string optional",
      "address": "string optional",
      "organization": "string optional",
      "manufacturerId": "string optional"
    }
    ```
  - Response: `{ "msg": "Manufacturer account created successfully", "token": "JWT" }`
- POST `/api/manufacturer/auth/login`
  - Body:
    ```json
    { "email": "string", "password": "string" }
    ```
  - Response: `{ "msg": "Manufacturer account login successfully", "token": "JWT" }`

### Products
- POST `/api/manufacturer/product` (Auth: Required)
  - Body:
    ```json
    {
      "productName": "string",
      "productDescription": "string optional",
      "productImage": "string optional",
      "productionDate": "string optional",
      "productionBatch": "string optional"
    }
    ```
  - Response: `{ "msg": "Product created successfully", "data": Product }`
- GET `/api/manufacturer/product` (Auth: Required)
  - Response: `{ "msg": "Products fetched successfully", "data": Product[] }`
- GET `/api/manufacturer/product/:id` (Auth: Required)
  - Response: product with inventories and herb inventories
- PUT `/api/manufacturer/product/:id` (Auth: Required)
  - Body: any of fields from create
  - Response: `{ "msg": "Product updated successfully", "data": Product }`
- DELETE `/api/manufacturer/product/:id` (Auth: Required)
  - Response: `{ "msg": "Product deleted successfully" }`

### Product Inventory (one product → many product inventories)
- POST `/api/manufacturer/product-inventory` (Auth: Required)
  - Body:
    ```json
    {
      "productId": "string",
      "HerbName": "string"
    }
    ```
  - Response: `{ "msg": "Product inventory created successfully", "data": ProductInventory }`
- GET `/api/manufacturer/product-inventory/product/:productId` (Auth: Required)
  - Response: `{ "msg": "Product inventories fetched successfully", "data": ProductInventory[] }`
- GET `/api/manufacturer/product-inventory/:id` (Auth: Required)
  - Response: single inventory with `HerbInventories`
- PUT `/api/manufacturer/product-inventory/:id` (Auth: Required)
  - Body:
    ```json
    { "HerbName": "string optional" }
    ```
  - Response: `{ "msg": "Product inventory updated successfully", "data": ProductInventory }`
- DELETE `/api/manufacturer/product-inventory/:id` (Auth: Required)
  - Response: `{ "msg": "Product inventory deleted successfully" }`

### Herb Inventory (one product inventory → many herb inventories)
- POST `/api/manufacturer/herb-inventory` (Auth: Required)
  - Body:
    ```json
    {
      "processorInventoryId": "string",
      "quantityReceived": "string",
      "productInventoryId": "string"
    }
    ```
  - Response: `{ "msg": "Herb inventory created successfully", "data": HerbInventory }`
- GET `/api/manufacturer/herb-inventory` (Auth: Required)
  - Response: all herb inventories linked to manufacturer products
- GET `/api/manufacturer/herb-inventory/:id` (Auth: Required)
  - Response: herb inventory with `processorInventory` and owning `productInventory`
- PUT `/api/manufacturer/herb-inventory/:id` (Auth: Required)
  - Body:
    ```json
    {
      "quantityReceived": "string optional",
      "processorInventoryId": "string optional"
    }
    ```
  - Response: `{ "msg": "Herb inventory updated successfully", "data": HerbInventory }`

## Processor

### Auth
- POST `/api/processor/auth/signup`
  - Body:
    ```json
    {
      "email": "string",
      "password": "string",
      "name": "string optional",
      "address": "string optional",
      "organization": "string optional",
      "processorId": "string optional"
    }
    ```
  - Response: `{ "msg": "Processor account created successfully", "token": "JWT" }`
- POST `/api/processor/auth/login`
  - Body: `{ "email": "string", "password": "string" }`
  - Response: `{ "msg": "Processor account login successfully", "token": "JWT" }`

### Inventory
- POST `/api/processor/inventory` (Auth: Required)
  - Body:
    ```json
    {
      "inventoryName": "string",
      "assignedGrade": "string",
      "specie": "string",
      "moisture": "string optional",
      "soilType": "string optional",
      "WaterType": "string optional",
      "Season": "string optional",
      "Location": "string optional"
    }
    ```
  - Response: `{ "msg": "Inventory created successfully", "data": ProcessorInventory }`
- GET `/api/processor/inventory` (Auth: Required)
  - Response: `{ "msg": "Inventories fetched successfully", "data": ProcessorInventory[] }`
- GET `/api/processor/inventory/:id` (Auth: Required)
  - Response: single inventory with `Items`
- PUT `/api/processor/inventory/:id` (Auth: Required)
  - Body: any of inventory fields (all optional)
  - Response: `{ "msg": "Inventory updated successfully", "data": ProcessorInventory }`

### Farmer Inputs
- POST `/api/processor/farmer-input` (Auth: Required)
  - Body:
    ```json
    {
      "inventoryID": "string",
      "quantity": "string",
      "eventId": "string",
      "specie": "string optional"
    }
    ```
  - Response: `{ "msg": "Farmer input added successfully", "data": ProcessorFarmerInput }`
- GET `/api/processor/farmer-input/inventory/:inventoryId` (Auth: Required)
  - Response: `{ "msg": "Farmer inputs fetched successfully", "data": ProcessorFarmerInput[] }`
- GET `/api/processor/farmer-input/event/:eventId` (Auth: Required)
  - Response: `{ "msg": "Farmer input fetched successfully", "data": ProcessorFarmerInput }`

### Processing Plant Info
- POST `/api/processor/plant` (Auth: Required)
  - Body:
    ```json
    { "estb": "string", "GSTIN": "string", "Storage": "string", "herbs": "string" }
    ```
  - Response: `{ "msg": "Processing plant info saved successfully", "data": ProcessingPlantInfo }`
- GET `/api/processor/plant` (Auth: Required)
  - Response: `{ "msg": "Processing plant info fetched successfully", "data": ProcessingPlantInfo }`

## Lab

### Auth
- POST `/api/lab/auth/signup`
  - Body: `{ "email": "string", "password": "string" }` plus optional profile fields
  - Response: `{ "msg": "Lab account created successfully", "token": "JWT" }`
- POST `/api/lab/auth/login`
  - Body: `{ "email": "string", "password": "string" }`
  - Response: `{ "msg": "Lab account login successfully", "token": "JWT" }`

### License & Info
- POST `/api/lab/license/info` (Auth: Required)
  - Body:
    ```json
    {
      "address": "string optional",
      "type": "GOVT | PVT optional",
      "labName": "string optional",
      "nablCertificateNo": "string optional",
      "nablExp": "string optional",
      "isFssaiReg": "boolean optional",
      "fssaiRegNo": "string optional",
      "about": "string optional"
    }
    ```
  - Response: `{ "msg": "Lab information added/updated successfully", "data": LabInfo }`

### Workers
- POST `/api/lab/worker` (Auth: Required)
  - Body: `{ "name": "string", "workerId": "string", "role": "ADMIN | WORKER", "desc": "string optional" }`
  - Response: `{ "msg": "Lab worker added successfully", "data": LabWorker }`

### Processor Inputs
- POST `/api/lab/processor-input` (Auth: Required)
  - Body: processor input payload (inventory linkage, report fields)
- GET `/api/lab/processor-input` (Auth: Required)
- GET `/api/lab/processor-input/pending-report` (Auth: Required)
- PUT `/api/lab/processor-input/:id` (Auth: Required)

## Farmer

### Auth
- POST `/api/farmer/auth/signup`
- POST `/api/farmer/auth/verifyOtp`
- POST `/api/farmer/auth/login`
- GET `/api/farmer/auth/health` (no auth)

### License/Application
- POST `/api/farmer/license/personalInfo` (Auth: Required)
- POST `/api/farmer/license/landinfo` (Auth: Required)
- POST `/api/farmer/license/applylicense` (Auth: Required)
- GET `/api/farmer/license/getverificatonstatus` (Auth: Required)
- GET `/api/farmer/license/isProfileComplete` (Auth: Required)

### Getter
- GET `/api/farmer/get/userdata` (Auth: Required)
- GET `/api/farmer/get/landinfo` (Auth: Required)
- GET `/api/farmer/get/checkProfileCompleted` (Auth: Required)

### Updates
- POST `/api/farmer/update/deletelandinfo` (Auth: Required)

### Product Data
- POST `/api/farmer/add/herbdata` (Auth: Required)

## Notes
- All IDs are strings (UUIDs) unless otherwise specified.
- Date/time fields are strings unless stored as `DateTime` in the database.
- Manufacturer product → product inventory → herb inventory relationships:
  - A `Product` has many `ProductInventory` (`Inventories`).
  - A `ProductInventory` has many `HerbInventory` (`HerbInventories`).
  - `HerbInventory` references `ProcessorInventory` via `processorInventoryId` and links back to `ProductInventory` via `productInventoryId`.

## Admin Verification

- GET `/api/admin/farmers/not-verified`
  - Response: `{ success: true, count, farmers }`
- POST `/api/admin/farmers/:id/verify`
  - Response: `{ success: true, message: "Farmer verified", farmer }`
- POST `/api/admin/farmers/:id/reject`
  - Response: `{ success: true, message: "Farmer rejected", farmer }`
- GET `/api/admin/labs/not-verified`
  - Response: `{ success: true, count, labs }`
- POST `/api/admin/labs/:id/verify`
  - Response: `{ success: true, message: "Lab verified", lab }`
- POST `/api/admin/labs/:id/reject`
  - Response: `{ success: true, message: "Lab rejected", lab }`
- GET `/api/admin/processors/not-verified`
  - Response: `{ success: true, count, processors }`
- POST `/api/admin/processors/:id/verify`
  - Response: `{ success: true, message: "Processor verified", processor }`
- POST `/api/admin/processors/:id/reject`
  - Response: `{ success: true, message: "Processor rejected", processor }`
- GET `/api/admin/manufacturers/not-verified`
  - Response: `{ success: true, count, manufacturers }`
- POST `/api/admin/manufacturers/:id/verify`
  - Response: `{ success: true, message: "Manufacturer verified", manufacturer }`
- POST `/api/admin/manufacturers/:id/reject`
  - Response: `{ success: true, message: "Manufacturer rejected", manufacturer }`
- GET `/api/admin/products/:id/details`
  - Response: `{ success: true, message: "Product details retrieved successfully", product }` (includes manufacturer, inventories, herb inventories, processor inventory with processor info/items/lab inputs, and linked product inventory)