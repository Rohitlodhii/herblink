# API Documentation

This document provides comprehensive documentation for all API endpoints in the HerbLink Pro Backend.

**Base URL**: `/api`

All protected endpoints require JWT authentication via the `Authorization` header:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Table of Contents

1. [Farmer APIs](#farmer-apis)
2. [Lab APIs](#lab-apis)
3. [Processor APIs](#processor-apis)
4. [Manufacturer APIs](#manufacturer-apis)

---

## Farmer APIs

All farmer routes are prefixed with `/api/farmer`.

### Authentication

#### Sign Up (Send OTP)
- **Method**: `POST`
- **Path**: `/api/farmer/auth/signup`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "fullname": "string (required)",
    "mobileNumber": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "OTP sent successfully"
  }
  ```
- **Error Responses**:
  - `400`: Missing mobile number or fullname
  - `409`: Mobile number already exists (verified account)

#### Verify OTP
- **Method**: `POST`
- **Path**: `/api/farmer/auth/verifyOtp`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "mobileNumber": "string (required)",
    "otp": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "OTP verified successfully",
    "token": "JWT_TOKEN"
  }
  ```

#### Login
- **Method**: `POST`
- **Path**: `/api/farmer/auth/login`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "mobileNumber": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "OTP sent successfully"
  }
  ```

#### Health Check
- **Method**: `GET`
- **Path**: `/api/farmer/auth/health`
- **Auth**: Not required
- **Response** (200):
  ```json
  {
    "msg": "Server up and running"
  }
  ```

### License & Profile

#### Add Personal Info
- **Method**: `POST`
- **Path**: `/api/farmer/license/personalInfo`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "fullName": "string (optional)",
    "dob": "string (optional)",
    "address": "string (optional)",
    "fatherName": "string (optional)",
    "gender": "string (optional)",
    "aadharNumber": "string (optional)",
    "annualIncome": "string (optional)",
    "farmerType": "FARMER | WILDCOLLECTOR (optional)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Personal info updated successfully",
    "data": "Farmer object"
  }
  ```

#### Add Land Info
- **Method**: `POST`
- **Path**: `/api/farmer/license/landinfo`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "totalHectare": "number (required)",
    "khasraNumber": "string (required)",
    "coordinates": "object (optional)",
    "kisanCardNumber": "string (optional)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Land info added successfully",
    "data": "LandInfo object"
  }
  ```

#### Apply License
- **Method**: `POST`
- **Path**: `/api/farmer/license/applylicense`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "farmerID": "string (optional)",
    "password": "string (optional)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "License application submitted successfully",
    "data": "Farmer object"
  }
  ```

#### Get Verification Status
- **Method**: `GET`
- **Path**: `/api/farmer/license/getverificatonstatus`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Verification status fetched",
    "data": {
      "status": "pending | acknowledge | verified | rejected",
      "isVerified": "boolean"
    }
  }
  ```

#### Check Profile Completed
- **Method**: `GET`
- **Path**: `/api/farmer/license/isProfileComplete`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Profile completion status",
    "isProfileCompleted": "boolean"
  }
  ```

### Getter Endpoints

#### Get User Data
- **Method**: `GET`
- **Path**: `/api/farmer/get/userdata`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Farmer data fetched successfully",
    "data": "Farmer object with relations"
  }
  ```

#### Get Land Info
- **Method**: `GET`
- **Path**: `/api/farmer/get/landinfo`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Land info fetched successfully",
    "data": "LandInfo[] array"
  }
  ```

#### Check Profile Completed (Getter)
- **Method**: `GET`
- **Path**: `/api/farmer/get/checkProfileCompleted`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Profile completion status",
    "isProfileCompleted": "boolean"
  }
  ```

### Updates

#### Delete Land Info
- **Method**: `POST`
- **Path**: `/api/farmer/update/deletelandinfo`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "landInfoId": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Land info deleted successfully"
  }
  ```

### Products

#### Add Herb Data
- **Method**: `POST`
- **Path**: `/api/farmer/add/herbdata`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "herbname": "string (required)",
    "harvestDate": "string (required)",
    "coordinates": "string (required)",
    "pesticidesUsed": "boolean (required)",
    "quantity": "string (required)",
    "desc": "string (required)"
  }
  ```
- **Response** (201):
  ```json
  {
    "msg": "Herb data added successfully",
    "data": "HerbData object"
  }
  ```

---

## Lab APIs

All lab routes are prefixed with `/api/lab`.

### Authentication

#### Sign Up
- **Method**: `POST`
- **Path**: `/api/lab/auth/signup`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Lab account created successfully",
    "token": "JWT_TOKEN"
  }
  ```

#### Login
- **Method**: `POST`
- **Path**: `/api/lab/auth/login`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Lab account login successfully",
    "token": "JWT_TOKEN"
  }
  ```

### License & Info

#### Add/Update Lab Info
- **Method**: `POST`
- **Path**: `/api/lab/license/info`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "address": "string (optional)",
    "type": "GOVT | PVT (optional)",
    "labName": "string (optional)",
    "nablCertificateNo": "string (optional)",
    "nablExp": "string (optional)",
    "isFssaiReq": "boolean (optional)",
    "fssaiReqNo": "string (optional)",
    "about": "string (optional)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Lab information added/updated successfully",
    "data": "LabInfo object"
  }
  ```

### Workers

#### Add Lab Worker
- **Method**: `POST`
- **Path**: `/api/lab/worker`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "name": "string (required)",
    "workerId": "string (required, unique)",
    "role": "ADMIN | WORKER (required)",
    "desc": "string (optional)"
  }
  ```
- **Response** (201):
  ```json
  {
    "msg": "Lab worker added successfully",
    "data": "LabWorker object"
  }
  ```

### Processor Input

#### Add Lab Processor Input
- **Method**: `POST`
- **Path**: `/api/lab/processor-input`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "processorInventoryId": "string (required)"
  }
  ```
- **Response** (201):
  ```json
  {
    "msg": "Lab processor input added successfully",
    "data": "LabProcessorInput object"
  }
  ```

#### List All Lab Processor Inputs
- **Method**: `GET`
- **Path**: `/api/lab/processor-input`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Lab processor inputs fetched successfully",
    "data": "LabProcessorInput[] array with processorInventory relations"
  }
  ```

#### List Processor Inputs Without Report
- **Method**: `GET`
- **Path**: `/api/lab/processor-input/pending-report`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Lab processor inputs without report fetched successfully",
    "data": "LabProcessorInput[] array where reportpath is null or empty"
  }
  ```

---

## Processor APIs

All processor routes are prefixed with `/api/processor`.

### Authentication

#### Sign Up
- **Method**: `POST`
- **Path**: `/api/processor/auth/signup`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "email": "string (required)",
    "password": "string (required)",
    "name": "string (optional)",
    "address": "string (optional)",
    "organization": "string (optional)",
    "processorId": "string (required, unique)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Processor account created successfully",
    "token": "JWT_TOKEN"
  }
  ```

#### Login
- **Method**: `POST`
- **Path**: `/api/processor/auth/login`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Processor account login successfully",
    "token": "JWT_TOKEN"
  }
  ```

### Inventory

#### Create Inventory
- **Method**: `POST`
- **Path**: `/api/processor/inventory`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "inventoryName": "string (required)",
    "assignedGrade": "string (required)",
    "processinglist": "string (optional)",
    "specie": "string (required)",
    "finalQuantity": "string (required)",
    "sendedToLab": "string (optional)"
  }
  ```
- **Response** (201):
  ```json
  {
    "msg": "Inventory created successfully",
    "data": "ProcessorInventory object"
  }
  ```

#### List Inventories
- **Method**: `GET`
- **Path**: `/api/processor/inventory`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Inventories fetched successfully",
    "data": "ProcessorInventory[] array"
  }
  ```

#### Get Inventory by ID
- **Method**: `GET`
- **Path**: `/api/processor/inventory/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, inventory ID)
- **Response** (200):
  ```json
  {
    "msg": "Inventory fetched successfully",
    "data": "ProcessorInventory object with Items (farmer inputs)"
  }
  ```

### Farmer Inputs

#### Add Farmer Input to Inventory
- **Method**: `POST`
- **Path**: `/api/processor/farmer-input`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "inventoryID": "string (required, must belong to current processor)",
    "quantity": "string (required)",
    "eventId": "string (required, unique)",
    "specie": "string (optional)"
  }
  ```
- **Response** (201):
  ```json
  {
    "msg": "Farmer input added successfully",
    "data": "ProcessorFarmerInput object"
  }
  ```

#### List Farmer Inputs for an Inventory
- **Method**: `GET`
- **Path**: `/api/processor/farmer-input/inventory/:inventoryId`
- **Auth**: Required
- **Params**:
  - `inventoryId` (string, inventory ID belonging to processor)
- **Response** (200):
  ```json
  {
    "msg": "Farmer inputs fetched successfully",
    "data": "ProcessorFarmerInput[] array"
  }
  ```

#### Get Farmer Input by Event ID
- **Method**: `GET`
- **Path**: `/api/processor/farmer-input/event/:eventId`
- **Auth**: Required
- **Params**:
  - `eventId` (string, unique farmer input event ID)
- **Response** (200):
  ```json
  {
    "msg": "Farmer input fetched successfully",
    "data": "ProcessorFarmerInput object"
  }
  ```

### Processing Plant Info

#### Create/Update Plant Info
- **Method**: `POST`
- **Path**: `/api/processor/plant`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "estb": "string (required)",
    "GSTIN": "string (required)",
    "Storage": "string (required)",
    "herbs": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Processing plant info saved successfully",
    "data": "ProcessingPlantInfo object"
  }
  ```

#### Get Plant Info
- **Method**: `GET`
- **Path**: `/api/processor/plant`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Processing plant info fetched successfully",
    "data": "ProcessingPlantInfo object"
  }
  ```

---

## Manufacturer APIs

All manufacturer routes are prefixed with `/api/manufacturer`.

### Authentication

#### Sign Up
- **Method**: `POST`
- **Path**: `/api/manufacturer/auth/signup`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "email": "string (required)",
    "password": "string (required)",
    "name": "string (optional)",
    "address": "string (optional)",
    "organization": "string (optional)",
    "manufacturerId": "string (required, unique)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Manufacturer account created successfully",
    "token": "JWT_TOKEN"
  }
  ```

#### Login
- **Method**: `POST`
- **Path**: `/api/manufacturer/auth/login`
- **Auth**: Not required
- **Body** (JSON):
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Manufacturer account login successfully",
    "token": "JWT_TOKEN"
  }
  ```

### Products

#### Create Product
- **Method**: `POST`
- **Path**: `/api/manufacturer/product`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "productName": "string (required)",
    "productDescription": "string (optional)",
    "productImage": "string (optional)",
    "productionDate": "string (optional)",
    "productionBatch": "string (optional)"
  }
  ```
- **Response** (201):
  ```json
  {
    "msg": "Product created successfully",
    "data": "Product object"
  }
  ```

#### List All Products
- **Method**: `GET`
- **Path**: `/api/manufacturer/product`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Products fetched successfully",
    "data": "Product[] array with Inventories relation"
  }
  ```

#### Get Product by ID
- **Method**: `GET`
- **Path**: `/api/manufacturer/product/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, product ID)
- **Response** (200):
  ```json
  {
    "msg": "Product fetched successfully",
    "data": "Product object with Inventories and herbInventory relations"
  }
  ```

#### Update Product
- **Method**: `PUT`
- **Path**: `/api/manufacturer/product/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, product ID)
- **Body** (JSON):
  ```json
  {
    "productName": "string (optional)",
    "productDescription": "string (optional)",
    "productImage": "string (optional)",
    "productionDate": "string (optional)",
    "productionBatch": "string (optional)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Product updated successfully",
    "data": "Product object"
  }
  ```

#### Delete Product
- **Method**: `DELETE`
- **Path**: `/api/manufacturer/product/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, product ID)
- **Response** (200):
  ```json
  {
    "msg": "Product deleted successfully"
  }
  ```

### Product Inventory

#### Create Product Inventory
- **Method**: `POST`
- **Path**: `/api/manufacturer/product-inventory`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "productId": "string (required, must belong to manufacturer)",
    "HerbName": "string (required)",
    "herbInventoryId": "string (required, must exist)"
  }
  ```
- **Response** (201):
  ```json
  {
    "msg": "Product inventory created successfully",
    "data": "ProductInventory object"
  }
  ```

#### List Product Inventories for a Product
- **Method**: `GET`
- **Path**: `/api/manufacturer/product-inventory/product/:productId`
- **Auth**: Required
- **Params**:
  - `productId` (string, product ID belonging to manufacturer)
- **Response** (200):
  ```json
  {
    "msg": "Product inventories fetched successfully",
    "data": "ProductInventory[] array with herbInventory and processorInventory relations"
  }
  ```

#### Get Product Inventory by ID
- **Method**: `GET`
- **Path**: `/api/manufacturer/product-inventory/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, product inventory ID)
- **Response** (200):
  ```json
  {
    "msg": "Product inventory fetched successfully",
    "data": "ProductInventory object with product and herbInventory relations"
  }
  ```

#### Update Product Inventory
- **Method**: `PUT`
- **Path**: `/api/manufacturer/product-inventory/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, product inventory ID)
- **Body** (JSON):
  ```json
  {
    "HerbName": "string (optional)",
    "herbInventoryId": "string (optional, must exist)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Product inventory updated successfully",
    "data": "ProductInventory object"
  }
  ```

#### Delete Product Inventory
- **Method**: `DELETE`
- **Path**: `/api/manufacturer/product-inventory/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, product inventory ID)
- **Response** (200):
  ```json
  {
    "msg": "Product inventory deleted successfully"
  }
  ```

### Herb Inventory

#### Create Herb Inventory
- **Method**: `POST`
- **Path**: `/api/manufacturer/herb-inventory`
- **Auth**: Required
- **Body** (JSON):
  ```json
  {
    "processorInventoryId": "string (required, must exist)",
    "quantityReceived": "string (required)"
  }
  ```
- **Response** (201):
  ```json
  {
    "msg": "Herb inventory created successfully",
    "data": "HerbInventory object"
  }
  ```

#### List All Herb Inventories
- **Method**: `GET`
- **Path**: `/api/manufacturer/herb-inventory`
- **Auth**: Required
- **Response** (200):
  ```json
  {
    "msg": "Herb inventories fetched successfully",
    "data": "HerbInventory[] array linked to manufacturer's products with processorInventory relations"
  }
  ```

#### Get Herb Inventory by ID
- **Method**: `GET`
- **Path**: `/api/manufacturer/herb-inventory/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, herb inventory ID)
- **Response** (200):
  ```json
  {
    "msg": "Herb inventory fetched successfully",
    "data": "HerbInventory object with processorInventory and productInventory relations"
  }
  ```

#### Update Herb Inventory
- **Method**: `PUT`
- **Path**: `/api/manufacturer/herb-inventory/:id`
- **Auth**: Required
- **Params**:
  - `id` (string, herb inventory ID)
- **Body** (JSON):
  ```json
  {
    "quantityReceived": "string (optional)",
    "processorInventoryId": "string (optional, must exist)"
  }
  ```
- **Response** (200):
  ```json
  {
    "msg": "Herb inventory updated successfully",
    "data": "HerbInventory object"
  }
  ```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "msg": "Error message describing what went wrong"
}
```

### 401 Unauthorized
```json
{
  "msg": "Authorization token missing."
}
```

### 403 Forbidden
```json
{
  "msg": "Invalid or expired token." | "You are not authorized to perform this action"
}
```

### 404 Not Found
```json
{
  "msg": "Resource not found"
}
```

### 409 Conflict
```json
{
  "msg": "Resource already exists"
}
```

### 500 Internal Server Error
```json
{
  "msg": "Internal Server error"
}
```

---

## Authentication Flow

1. **Sign Up/Login**: User provides credentials and receives a JWT token
2. **Protected Endpoints**: Include the token in the Authorization header:
   ```
   Authorization: Bearer <JWT_TOKEN>
   ```
3. **Token Expiry**: Tokens expire after 1 day. User must login again to get a new token.

---

## Notes

- All timestamps are in ISO 8601 format
- All IDs are UUIDs (strings)
- Boolean values are `true` or `false`
- Enum values are case-sensitive (e.g., `GOVT`, `PVT`, `ADMIN`, `WORKER`)
- Optional fields can be omitted from request bodies
- All endpoints return JSON responses

