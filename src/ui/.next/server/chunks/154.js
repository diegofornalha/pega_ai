"use strict";
exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 5496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$F": () => (/* binding */ nameServiceState),
/* harmony export */   "VQ": () => (/* binding */ basicNotificationContentState),
/* harmony export */   "Z9": () => (/* binding */ showAlertModalState),
/* harmony export */   "cY": () => (/* binding */ transactionStatusState),
/* harmony export */   "lo": () => (/* binding */ showBasicNotificationState),
/* harmony export */   "xr": () => (/* binding */ transactionInProgressState),
/* harmony export */   "ys": () => (/* binding */ alertModalContentState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const transactionInProgressState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "transactionInProgressState",
    default: false
});
const transactionStatusState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "transactionStatusState",
    default: null
});
const showBasicNotificationState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "showBasicNotificationState",
    default: false
});
const basicNotificationContentState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "basicNotificationContentState",
    default: null
});
const showAlertModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "showAlertModalState",
    default: false
});
const alertModalContentState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "alertModalContentState",
    default: {
        content: "",
        actionTitle: "",
        action: null
    }
});
const nameServiceState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "nameServiceState",
    default: null
});


/***/ }),

/***/ 7463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gq": () => (/* binding */ queryRecords),
/* harmony export */   "jb": () => (/* binding */ queryDefaultDomainsOfAddresses),
/* harmony export */   "nn": () => (/* binding */ queryAddressesOfDomains)
/* harmony export */ });
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5820);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__);


const DrizzleRecorderPath = "0xDrizzleRecorder";
const MistPath = "0xMist";
const FlownsPath = "0xFlowns";
const Domains = "0xDomains";
const FINDPath = "0xFIND";
const DomainUtils = "0xDomainUtils";
const queryDefaultDomainsOfAddresses = async (addresses)=>{
    if (addresses.length == 0) {
        return {};
    }
    const code = `
  import DomainUtils from 0xDomainUtils

  pub fun main(addresses: [Address]): {Address: {String: String}} {
      return DomainUtils.getDefaultDomainsOfAddresses(addresses)
  }
  `.replace(DomainUtils, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domainUtilsAddress */ .Z.domainUtilsAddress);
    const domains = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.query({
        cadence: code,
        args: (arg, t)=>[
                arg(addresses, t.Array(t.Address)), 
            ]
    });
    return domains;
};
const queryAddressesOfDomains = async (domains)=>{
    if (domains.length == 0) {
        return {};
    }
    const names = [];
    const roots = [];
    for(let i = 0; i < domains.length; i++){
        const domain = domains[i];
        const elements = domain.split(".");
        if (elements.length != 2) {
            continue;
        }
        names.push(elements[0]);
        roots.push(elements[1]);
    }
    const code = `
  import DomainUtils from 0xDomainUtils

  pub fun main(names: [String], roots: [String]): {String: Address} {
      return DomainUtils.getAddressesOfDomains(names: names, roots: roots)
  }
  `.replace(DomainUtils, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domainUtilsAddress */ .Z.domainUtilsAddress);
    const addresses = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.query({
        cadence: code,
        args: (arg, t)=>[
                arg(names, t.Array(t.String)),
                arg(roots, t.Array(t.String)), 
            ]
    });
    return addresses;
};
const queryRecords = async (account)=>{
    const code = `
  import DrizzleRecorder from 0xDrizzleRecorder
  import Mist from 0xMist
  import DomainUtils from 0xDomainUtils

  pub struct Host {
    pub let address: Address
    pub let domains: {String: String}

    init(address: Address, domains: {String: String}) {
      self.address = address
      self.domains = domains
    }
  }

  pub struct DropRecord {
    pub let dropID: UInt64
    pub let host: Host
    pub let name: String
    pub let tokenSymbol: String
    pub let claimedAmount: UFix64
    pub let claimedAt: UFix64
    pub let extraData: {String: AnyStruct}

    init(cloudDrop: DrizzleRecorder.CloudDrop) {
      self.dropID = cloudDrop.dropID
      self.host = Host(address: cloudDrop.host, domains: DomainUtils.getDefaultDomainsOfAddress(cloudDrop.host))
      self.name = cloudDrop.name
      self.tokenSymbol = cloudDrop.tokenSymbol
      self.claimedAmount = cloudDrop.claimedAmount
      self.claimedAt = cloudDrop.claimedAt
      self.extraData = cloudDrop.extraData
    }
  }

  pub struct RaffleRecord {
    pub let raffleID: UInt64
    pub let host: Host
    pub let name: String
    pub let nftName: String
    pub let registeredAt: UFix64
    pub let rewardTokenIDs: [UInt64]
    pub var claimedAt: UFix64?
    pub let extraData: {String: AnyStruct}
    pub let status: String

    init(mistRaffle: DrizzleRecorder.MistRaffle, status: String) {
        self.raffleID = mistRaffle.raffleID
        self.host = Host(address: mistRaffle.host, domains: DomainUtils.getDefaultDomainsOfAddress(mistRaffle.host))
        self.name = mistRaffle.name
        self.nftName = mistRaffle.nftName
        self.registeredAt = mistRaffle.registeredAt
        self.rewardTokenIDs = mistRaffle.rewardTokenIDs
        self.claimedAt = mistRaffle.claimedAt
        self.extraData = mistRaffle.extraData
        self.status = status
    }
}

pub fun getRaffleStatus(account: Address, record: DrizzleRecorder.MistRaffle): String {
    var status = "UNKNOWN"
    if record.claimedAt != nil {
        status = "YES"
    } else {
        let raffleCollection =
            getAccount(record.host)
            .getCapability(Mist.RaffleCollectionPublicPath)
            .borrow<&Mist.RaffleCollection{Mist.IRaffleCollectionPublic}>()
        
        if let collection = raffleCollection {
            if let raffleRef = collection.borrowPublicRaffleRef(raffleID: record.raffleID) {
                if let winner = raffleRef.getWinner(account: account) {
                    status = "YES"
                } else {
                    let winners = raffleRef.getWinners()
                    if UInt64(winners.keys.length) == raffleRef.numberOfWinners {
                        status = "NO"
                    }
                }
            } else {
                status = "NOT FOUND"
            }
        } else {
            status = "NOT FOUND"
        }
    }
    return status
}

  pub fun main(account: Address): {String: {UInt64: AnyStruct}} {
      let recorder =
          getAccount(account)
          .getCapability(DrizzleRecorder.RecorderPublicPath)
          .borrow<&{DrizzleRecorder.IRecorderPublic}>()
      
      let res: {String: {UInt64: AnyStruct}} = {}
      if let _recorder = recorder {
          let dropType = Type<DrizzleRecorder.CloudDrop>()
          let dropRecords = _recorder.getRecordsByType(dropType)
          let dropRes: {UInt64: AnyStruct} = {}
          for key in dropRecords.keys {
            let _record = dropRecords[key]!
            let record = _record as! DrizzleRecorder.CloudDrop
            let rec = DropRecord(cloudDrop: record)
            dropRes[key] = rec
          }

          let raffleType = Type<DrizzleRecorder.MistRaffle>()
          let raffleRecords = _recorder.getRecordsByType(raffleType)
          let raffleRes: {UInt64: AnyStruct} = {}
          for key in raffleRecords.keys {
              let _record = raffleRecords[key]!
              let record = _record as! DrizzleRecorder.MistRaffle
              let status = getRaffleStatus(account: account, record: record)
              let rec = RaffleRecord(mistRaffle: record, status: status)
              raffleRes[key] = rec
          }
          res[dropType.identifier] = dropRes
          res[raffleType.identifier] = raffleRes
          return res
      }
  
      return {}
  }
  `.replace(DrizzleRecorderPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].drizzleRecorderAddress */ .Z.drizzleRecorderAddress).replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress).replace(DomainUtils, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domainUtilsAddress */ .Z.domainUtilsAddress);
    const records = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.query({
        cadence: code,
        args: (arg, t)=>[
                arg(account, t.Address)
            ]
    });
    return records;
};


/***/ }),

/***/ 5023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$k": () => (/* binding */ filterAddresses),
/* harmony export */   "AK": () => (/* binding */ classNames),
/* harmony export */   "DX": () => (/* binding */ floatEventInputHandler),
/* harmony export */   "EP": () => (/* binding */ getTimezone),
/* harmony export */   "HH": () => (/* binding */ isValidHttpUrl),
/* harmony export */   "KO": () => (/* binding */ isValidFlowAddress),
/* harmony export */   "TH": () => (/* binding */ convertCadenceDateTime),
/* harmony export */   "V_": () => (/* binding */ getDistributorType),
/* harmony export */   "WL": () => (/* binding */ domainOfAddressesFetcher),
/* harmony export */   "_p": () => (/* binding */ getWhitelistFromAddresses),
/* harmony export */   "bY": () => (/* binding */ convertURI),
/* harmony export */   "br": () => (/* binding */ getWhitelistFromRecords),
/* harmony export */   "eh": () => (/* binding */ getDropStatus),
/* harmony export */   "fw": () => (/* binding */ displayUsername),
/* harmony export */   "li": () => (/* binding */ getVerifierType),
/* harmony export */   "oQ": () => (/* binding */ NameService),
/* harmony export */   "qX": () => (/* binding */ getItemsInPage),
/* harmony export */   "uw": () => (/* binding */ floatGroupInputHandler),
/* harmony export */   "xN": () => (/* binding */ filterRecords),
/* harmony export */   "xg": () => (/* binding */ generateImportsAndInterfaces),
/* harmony export */   "yn": () => (/* binding */ getRaffleStatus)
/* harmony export */ });
/* unused harmony exports addressOfDomainsFetcher, RaffleStatus, DropStatus, filterTokenIDs */
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9200);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5985);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7463);



const NameService = {
    flowns: "flowns",
    find: "find",
    none: "none"
};
const displayUsername = (userWithDomains, preferredNameService)=>{
    if (!userWithDomains.domains || !preferredNameService) {
        return userWithDomains.addr || userWithDomains.address || userWithDomains.account;
    }
    if (userWithDomains.domains[preferredNameService]) {
        return userWithDomains.domains[preferredNameService];
    }
    let nameService = NameService.flowns;
    if (preferredNameService == NameService.flowns) {
        nameService = NameService.find;
    }
    if (userWithDomains.domains[nameService]) {
        return userWithDomains.domains[nameService];
    }
    return userWithDomains.addr || userWithDomains.address || userWithDomains.account;
};
const domainOfAddressesFetcher = async (funcName, addresses)=>{
    return await (0,_scripts__WEBPACK_IMPORTED_MODULE_2__/* .queryDefaultDomainsOfAddresses */ .jb)(addresses);
};
const addressOfDomainsFetcher = async (funcName, domains)=>{
    return await (0,_scripts__WEBPACK_IMPORTED_MODULE_2__/* .queryAddressesOfDomains */ .nn)(domains);
};
const convertURI = (uri)=>{
    if (uri.startsWith("ipfs://")) {
        return `https://ipfs.io/ipfs/${uri.replace("ipfs://", "")}`;
    }
    return uri;
};
const generateImportsAndInterfaces = (restrictions)=>{
    const contracts = {};
    const interfacesArr = [];
    for(let i = 0; i < restrictions.length; i++){
        const r = restrictions[i];
        const [, address, name, interf] = r.split(".");
        contracts[name] = address;
        interfacesArr.push(`${name}.${interf}`);
    }
    let imports = ``;
    for (const [name, address] of Object.entries(contracts)){
        imports = imports.concat(`import ${name} from 0x${address}\n`);
    }
    const interfaces = interfacesArr.join(", ");
    return [
        imports,
        interfaces
    ];
};
const convertCadenceDateTime = (rawDate)=>{
    if (!rawDate) {
        return null;
    }
    if (typeof rawDate.getMonth === "function") {
        return rawDate;
    }
    return new Date(parseFloat(rawDate) * 1000);
};
const getTimezone = ()=>{
    return new Date().toTimeString().slice(9).split(" ")[0];
};
const classNames = (...classes)=>{
    return classes.filter(Boolean).join(" ");
};
const floatEventInputHandler = async (raw)=>{
    const result = raw.trim().replace("#", "").split("@");
    let host = "";
    let id = "0";
    if (result.length != 2) {
        const urlParseResult = decodeURI(raw.trim()).replace(`${_publicConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"].floatURL */ .Z.floatURL}/`, "").replaceAll("/", "").split("event");
        if (urlParseResult.length != 2) {
            throw "Invalid pair";
        }
        [host, id] = urlParseResult;
    } else {
        [id, host] = result;
    }
    if (!isValidFlowAddress(host)) {
        const addresses = await addressOfDomainsFetcher("addressOfDomainsFetcher", [
            host
        ]);
        if (Object.keys(addresses).length == 0) {
            throw "Invalid host";
        }
        host = addresses[host];
    }
    const _id = new (decimal_js__WEBPACK_IMPORTED_MODULE_0___default())(id);
    if (!(_id.isInteger() && _id.isPositive() && !_id.isZero())) {
        throw "Invalid event id";
    }
    return [
        {
            eventID: id,
            eventHost: host
        }
    ];
};
const floatGroupInputHandler = async (raw)=>{
    const result = raw.trim().replace("#", "").split("@");
    let host = "";
    let groupName = "";
    if (result.length != 2) {
        const urlParseResult = decodeURI(raw.trim()).replace(`${_publicConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"].floatURL */ .Z.floatURL}/`, "").replaceAll("/", "").split("group");
        if (urlParseResult.length != 2) {
            throw "Invalid pair";
        }
        [host, groupName] = urlParseResult;
    } else {
        [groupName, host] = result;
    }
    if (!isValidFlowAddress(host)) {
        const addresses = await addressOfDomainsFetcher("addressOfDomainsFetcher", [
            host
        ]);
        if (Object.keys(addresses).length == 0) {
            throw "Invalid host";
        }
        host = addresses[host];
    }
    if (groupName && groupName == "") {
        throw "Invalid groupName";
    }
    return {
        groupName: groupName,
        groupHost: host
    };
};
const isValidHttpUrl = (string)=>{
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
};
const isValidFlowAddress = (address)=>{
    if (!address.startsWith("0x") || address.length != 18) {
        return false;
    }
    const bytes = Buffer.from(address.replace("0x", ""), "hex");
    if (bytes.length != 8) {
        return false;
    }
    return true;
};
const RaffleStatus = {
    PAUSED: {
        title: "PAUSED",
        tagColor: "text-yellow-800 bg-yellow-100"
    },
    COMING: {
        title: "COMING",
        tagColor: "text-blue-800 bg-blue-100"
    },
    REGISTERING: {
        title: "REGISTERING",
        tagColor: "text-green-800 bg-green-100"
    },
    DRAWING: {
        title: "DRAWING",
        tagColor: "text-yellow-800 bg-yellow-100"
    },
    DRAWN: {
        title: "DRAWN",
        tagColor: "text-green-800 bg-green-100"
    },
    END: {
        title: "END",
        tagColor: "text-red-800 bg-red-100"
    },
    UNKNOWN: {
        title: "UNKNOWN",
        tagColor: "text-gray-800 bg-gray-100"
    }
};
const getItemsInPage = (totalItems, page, pageSize)=>{
    const items = totalItems.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return items;
};
const getRaffleStatus = (raffle)=>{
    if (!raffle || Object.keys(raffle.registrationVerifiers) <= 0) return RaffleStatus.UNKNOWN;
    if (raffle.isEnded) return RaffleStatus.END;
    if (raffle.startAt && 1000 * parseFloat(raffle.startAt) > new Date().getTime()) {
        return RaffleStatus.COMING;
    }
    if (raffle.endAt && 1000 * parseFloat(raffle.endAt) < new Date().getTime()) {
        return RaffleStatus.END;
    }
    if (raffle.isPaused) return RaffleStatus.PAUSED;
    let winnersCount = Object.keys(raffle.winners).length;
    if (winnersCount == raffle.numberOfWinners) {
        return RaffleStatus.DRAWN;
    }
    if (new Date().getTime() > 1000 * parseFloat(raffle.registrationEndAt)) {
        if (raffle.candidates.length == 0) {
            return RaffleStatus.DRAWN;
        }
        return RaffleStatus.DRAWING;
    }
    return RaffleStatus.REGISTERING;
};
// LIVE green
// PAUSED gray
// COMING blue
// ENDED red
const DropStatus = {
    PAUSED: {
        title: "PAUSED",
        tagColor: "text-yellow-800 bg-yellow-100"
    },
    COMING: {
        title: "COMING",
        tagColor: "text-blue-800 bg-blue-100"
    },
    END: {
        title: "END",
        tagColor: "text-red-800 bg-red-100"
    },
    LIVE: {
        title: "LIVE",
        tagColor: "text-green-800 bg-green-100"
    },
    UNKNOWN: {
        title: "UNKNOWN",
        tagColor: "text-gray-800 bg-gray-100"
    }
};
const getDropStatus = (drop)=>{
    if (!drop || Object.keys(drop.verifiers) <= 0) return DropStatus.UNKNOWN;
    if (drop.isEnded) return DropStatus.END;
    if (drop.isPaused) return DropStatus.PAUSED;
    if (drop.startAt && 1000 * parseFloat(drop.startAt) > new Date().getTime()) {
        return DropStatus.COMING;
    }
    if (drop.endAt && 1000 * parseFloat(drop.endAt) < new Date().getTime()) {
        return DropStatus.END;
    }
    const verifier = Object.values(drop.verifiers)[0][0];
    const claimed = Object.keys(drop.claimedRecords).length;
    let capacity = 0;
    if (verifier.type === "Whitelist" && drop.distributor.type === "Exclusive") {
        capacity = Object.keys(drop.distributor.distributeList).length;
    } else {
        capacity = parseInt(drop.distributor.capacity);
    }
    if (claimed === capacity) {
        return DropStatus.END;
    }
    return DropStatus.LIVE;
};
const getDistributorType = (drop)=>{
    if (!drop) return null;
    return drop.distributor.type;
};
const getVerifierType = (drizzle, type)=>{
    let verifier = null;
    if (type == "DROP") {
        if (!drizzle || Object.keys(drizzle.verifiers) <= 0) return null;
        verifier = Object.values(drizzle.verifiers)[0][0];
    } else {
        if (!drizzle || Object.keys(drizzle.registrationVerifiers) <= 0) return null;
        verifier = Object.values(drizzle.registrationVerifiers)[0][0];
    }
    if (verifier.type === "Whitelist") return "Whitelist";
    if (verifier.type === "FLOATGroup") return "FLOAT Group";
    if (verifier.type === "FLOATs") return "FLOAT";
};
// NFTSelector Helpers
const filterTokenIDs = (rawRecordsStr)=>{
    const rawRecords = rawRecordsStr.trim().split("\n").filter((r)=>r != ""
    );
    let tokenIDs = {};
    let validTokenIDs = [];
    let invalidTokenIDs = [];
    for(var i = 0; i < rawRecords.length; i++){
        let rawRecord = rawRecords[i].trim();
        try {
            if (tokenIDs[rawRecord]) throw "Duplicate tokenIDs";
            const tokenID = new Decimal(rawRecord);
            if (tokenID.isPositive() && tokenID.isInteger()) {
                validTokenIDs.push(tokenID.toNumber());
            } else {
                throw "invalid tokenID";
            }
        } catch (e) {
            invalidTokenIDs.push(rawRecord);
        }
        return [
            validTokenIDs,
            invalidTokenIDs
        ];
    }
};
// Whitelist Helpers
const getWhitelistFromAddresses = (addresses)=>{
    let whitelist = [];
    for(let i = 0; i < addresses.length; i++){
        const address = addresses[i];
        const claim = {
            key: address,
            value: true
        };
        whitelist.push(claim);
    }
    return whitelist;
};
const filterAddresses = async (rawRecordsStr)=>{
    const rawRecords = rawRecordsStr.trim().split("\n").filter((r)=>r != ""
    );
    let addresses = {};
    let validAddresses = [];
    let invalidAddresses = [];
    let candidates = [];
    for(var i = 0; i < rawRecords.length; i++){
        let address = rawRecords[i].trim();
        if (addresses[address]) {
            invalidAddresses.push(`${address}: Duplicate address`);
            continue;
        }
        addresses[address] = true;
        if (!isValidFlowAddress(address)) {
            const elements = address.split(".");
            if (elements.length == 2) {
                // Might be domain
                candidates.push(address);
                continue;
            }
            invalidAddresses.push(`${address}: Invalid address format`);
        } else {
            validAddresses.push(address);
        }
    }
    const domains = await (0,_scripts__WEBPACK_IMPORTED_MODULE_2__/* .queryAddressesOfDomains */ .nn)(candidates);
    for(let i1 = 0; i1 < candidates.length; i1++){
        const candidate = candidates[i1];
        const address = domains[candidate];
        if (address) {
            if (addresses[address]) {
                invalidAddresses.push(`${candidate}(${address}): Duplicate address`);
            } else {
                addresses[address] = true;
                validAddresses.push(address);
            }
        } else {
            invalidAddresses.push(`${candidate}: Address not found`);
        }
    }
    return [
        validAddresses,
        invalidAddresses
    ];
};
// WhitelistWithAmount Helpers
const getWhitelistFromRecords = (records)=>{
    let whitelist = [];
    for(let i = 0; i < records.length; i++){
        const record = records[i];
        const claim = {
            key: record.address,
            value: record.amount.toFixed(8).toString()
        };
        whitelist.push(claim);
    }
    return whitelist;
};
const filterRecords = async (rawRecordsStr)=>{
    const rawRecords = rawRecordsStr.trim().split("\n").filter((r)=>r != ""
    );
    let addresses = {};
    let validRecords = [];
    let candidates = [];
    let invalidRecords = [];
    for(var i = 0; i < rawRecords.length; i++){
        let rawRecord = rawRecords[i].trim();
        const [address, rawAmount] = rawRecord.split(",");
        const amount = new (decimal_js__WEBPACK_IMPORTED_MODULE_0___default())(rawAmount);
        if (!amount.isPositive() || amount.decimalPlaces() > 8) {
            invalidRecords.push(`${rawRecord}: Invalid amount. Should be positive with 8 decimal places at most`);
            continue;
        }
        if (addresses[address]) {
            invalidRecords.push(`${rawRecord}: Duplicate address`);
            continue;
        }
        addresses[address] = true;
        if (!isValidFlowAddress(address)) {
            const elements = address.split(".");
            if (elements.length == 2) {
                // Might be domain
                candidates.push({
                    id: i,
                    address: address,
                    amount: amount,
                    rawRecord: rawRecord
                });
                continue;
            }
            invalidRecords.push(`${rawRecord}: Invalid address format`);
        } else {
            validRecords.push({
                id: i,
                address: address,
                amount: amount,
                rawRecord: rawRecord
            });
        }
    }
    const domains = await (0,_scripts__WEBPACK_IMPORTED_MODULE_2__/* .queryAddressesOfDomains */ .nn)(candidates.map((c)=>c.address
    ));
    for(let i2 = 0; i2 < candidates.length; i2++){
        const candidate = candidates[i2];
        const address = domains[candidate.address];
        if (address) {
            if (addresses[address]) {
                invalidRecords.push(`${candidate.rawRecord}: duplicate address, ${candidate.address} is ${address}`);
            } else {
                addresses[address] = true;
                validRecords.push(candidate);
            }
        } else {
            invalidRecords.push(`${candidate.rawRecord}: Address not found`);
        }
    }
    return [
        validRecords,
        invalidRecords
    ];
};


/***/ }),

/***/ 5985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const chainEnv = "mainnet";
if (!chainEnv) throw "Missing NEXT_PUBLIC_CHAIN_ENV";
const accessNodeAPI = "https://floral-special-valley.flow-mainnet.quiknode.pro";
if (!accessNodeAPI) throw "Missing NEXT_PUBLIC_ACCESS_NODE_API";
const appURL = "https://drizzle33.app";
if (!appURL) throw "Missing NEXT_PUBLIC_APP_URL";
const walletDiscovery = "https://fcl-discovery.onflow.org/authn";
if (!walletDiscovery) throw "Missing NEXT_PUBLIC_WALLET_DISCOVERY";
const flowscanURL = "https://flowscan.org";
if (!flowscanURL) throw "Missing NEXT_PUBLIC_FLOWSCAN_URL";
const floatURL = "https://floats.city";
if (!floatURL) throw "Missing NEXT_PUBLIC_FLOAT_URL";
const fungibleTokenAddress = "0xf233dcee88fe0abe";
if (!fungibleTokenAddress) throw "Missing NEXT_PUBLIC_FUNGIBLE_TOKEN_ADDRESS";
const nonFungibleTokenAddress = "0x1d7e57aa55817448";
if (!nonFungibleTokenAddress) throw "Missing NEXT_PUBLIC_NON_FUNGIBLE_TOKEN_ADDRESS";
const metadataViewsAddress = "0x1d7e57aa55817448";
if (!metadataViewsAddress) throw "Missing NEXT_PUBLIC_METADATA_VIEWS_ADDRESS";
const flowTokenAddress = "0x1654653399040a61";
if (!flowTokenAddress) throw "Missing NEXT_PUBLIC_FLOW_TOKEN_ADDRESS";
const cloudAddress = "0x39b144ab4d348e2b";
if (!cloudAddress) throw "Missing NEXT_PUBLIC_CLOUD_ADDRESS";
const mistAddress = "0x39b144ab4d348e2b";
if (!mistAddress) throw "Missing NEXT_PUBLIC_MIST_ADDRESS";
const eligibilityVerifiersAddress = "0x39b144ab4d348e2b";
if (!eligibilityVerifiersAddress) throw "Missing NEXT_PUBLIC_ELIGIBILITY_VERIFIERS_ADDRESS";
const distributorsAddress = "0x39b144ab4d348e2b";
if (!distributorsAddress) throw "Missing NEXT_PUBLIC_DISTRIBUTORS_ADDRESS";
const drizzleRecorderAddress = "0x39b144ab4d348e2b";
if (!drizzleRecorderAddress) throw "Missing NEXT_PUBLIC_DRIZZLE_RECORDER_ADDRESS";
const domainUtilsAddress = "0x1b3930856571a52b";
if (!domainUtilsAddress) throw "Missing NEXT_PUBLIC_DOMAIN_UTILS_ADDRESS";
const floatAddress = "0x2d4c3caffbeab845";
if (!floatAddress) throw "Missing NEXT_PUBLIC_FLOAT_ADDRESS";
const bannerSizeLimit = 500000;
const flownsAddress = "0x233eb012d34b0070";
if (!flownsAddress) throw "Missing NEXT_PUBLIC_FLOWNS_ADDRESS";
const domainsAddress = "0x233eb012d34b0070";
if (!domainsAddress) throw "Missing NEXT_PUBLIC_DOMAINS_ADDRESS";
const findAddress = "0x097bafa4e0b48eef";
if (!findAddress) throw "Missing NEXT_PUBLIC_FIND_ADDRESS";
const publicConfig = {
    chainEnv,
    accessNodeAPI,
    appURL,
    walletDiscovery,
    flowscanURL,
    fungibleTokenAddress,
    nonFungibleTokenAddress,
    metadataViewsAddress,
    flowTokenAddress,
    cloudAddress,
    mistAddress,
    drizzleRecorderAddress,
    eligibilityVerifiersAddress,
    distributorsAddress,
    domainUtilsAddress,
    floatAddress,
    flownsAddress,
    domainsAddress,
    findAddress,
    floatURL,
    bannerSizeLimit
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicConfig);


/***/ })

};
;