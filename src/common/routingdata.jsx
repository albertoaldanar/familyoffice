import React, { Fragment } from 'react'
import ReactDOM from'react-dom/client'
import CouncilAndCommitteAddMember from '../pages/governance/councilAndCommittee/councilAndCommitteAddMember'
const  Cardsdesign= React.lazy(()=>import('../components/Apps/Cardsdesign/Cardsdesign'))
const  Chat= React.lazy(()=>import('../components/Apps/Chat/Chat'))
const  Contentscrollbar= React.lazy(()=>import('../components/Apps/ContentScrollbar/ContentScrollbar'))
const  Counters= React.lazy(()=>import('../components/Apps/Counters/Counters'))
const  Cryptocurrencies= React.lazy(()=>import('../components/Apps/Cryptocurrencies/Cryptocurrencies'))
const  Defaultcalender= React.lazy(()=>import ('../components/Apps/Defaultcalender/Defaultcalender'))
const  Footers= React.lazy(()=>import('../components/Apps/Footers/Footers'))
const  Loaders= React.lazy(()=>import('../components/Apps/Loaders/Loaders'))
const  Notifications= React.lazy(()=>import ('../components/Apps/Notifications/Notifications'))
const  Rangeslider= React.lazy(()=>import('../components/Apps/Rangeslider/Rangeslider'))
const  Ratings= React.lazy(()=>import('../components/Apps/Rating/Rating'))
const  Search= React.lazy(()=>import ('../components/Apps/Search/Search'))
const  SweetAlerts= React.lazy(()=>import ('../components/Apps/Sweetalerts/Sweetalerts'))
const  Treeviews= React.lazy(()=>import ('../components/Apps/Treeview/Treeview'))
const  Userlist= React.lazy(()=>import  ('../components/Apps/Userlist/UserList'))
const  Widgets= React.lazy(()=>import('../components/Apps/Widgets/Widgets'))
const  Alerts= React.lazy(()=>import  ('../components/Bootstrap/Alerts/Alerts'))
const  AvatarRadius= React.lazy(()=>import ('../components/Bootstrap/AvatarRadius/AvatarRadius'))
const  AvatarRounded= React.lazy(()=>import   ('../components/Bootstrap/AvatarRounded/AvatarRounded'))
const  Avatarsquare= React.lazy(()=>import  ('../components/Bootstrap/AvatarSquare/AvatarSquare'))
const  Buttons= React.lazy(()=>import  ('../components/Bootstrap/Buttons/Buttons'))
const  Colors= React.lazy(()=>import ('../components/Bootstrap/Colors/Colors'))
const  Dropdowns= React.lazy(()=>import    ('../components/Bootstrap/Dropdowns/Dropdowns'))
const  ListGroups= React.lazy(()=>import('../components/Bootstrap/ListGroup/ListGroup'))
const  Paginations= React.lazy(()=>import ('../components/Bootstrap/Pagination/Pagination'))
const  Tags= React.lazy(()=>import('../components/Bootstrap/Tags/Tags'))
const  Analytics= React.lazy(()=>import    ('../components/Dashboard/Analytics/Analytics'))
const  Crypto= React.lazy(()=>import ('../components/Dashboard/Crypto/Crypto'))
const  Ecommerce= React.lazy(()=>import    ('../components/Dashboard/Ecommerce/Ecommerce'))
const  Medical= React.lazy(()=>import  ('../components/Dashboard/Medical/Medical'))
const  Sales= React.lazy(()=>import('../components/Dashboard/Sales/Sales'))
const  Fulcalender= React.lazy(()=>import ('../components/apps/fullcalender/fullcalender'))
const  Typography= React.lazy(()=>import     ('../components/Bootstrap/Typography/Typography'))
const  Breadcrumbs= React.lazy(()=>import('../components/Bootstrap/Breadcrumbs/Breadcrumbs'))
const  BadgesPills= React.lazy(()=>import('../components/Bootstrap/BadgesPills/BadgesPills'))
const  Thumbnails= React.lazy(()=>import     ('../components/Bootstrap/Thumbnails/Thumbnails'))
const  Offcanva= React.lazy(()=>import   ('../components/Bootstrap/Offcanvas/Offcanvas'))
const  Toasts= React.lazy(()=>import ('../components/Bootstrap/Toast/Toast'))
/* FAMILY OFFICE */
/****************************** ADMINISTRATION ****************************************/
const  Companies= React.lazy(()=>import ('../pages/administration/accounting/companies'))
const  TrustCreate= React.lazy(()=>import ('../pages/administration/trusts/trustCreate'))
const  TrustDescription= React.lazy(()=>import ('../pages/administration/trusts/trustDescription'))
const  CompanyCreate= React.lazy(()=>import ('../pages/administration/accounting/companyCreate'))
const  CompanyDescription= React.lazy(()=>import ('../pages/administration/accounting/companyDescription'))
const  CompanyReport= React.lazy(()=>import ('../pages/administration/accounting/companyReport'))
const  CompanyReportCreate= React.lazy(()=>import ('../pages/administration/accounting/companyNewReport'))
const  Payments= React.lazy(()=>import ('../pages/administration/payments/payments'))
const  InsuraceDescription = React.lazy(()=>import ('../pages/administration/payments/insurances/insurancesDescription'))
const  InsurancePayment = React.lazy(()=>import ('../pages/administration/payments/insurances/insurancePayment'))
const  InsuranceNewPayment = React.lazy(()=>import ('../pages/administration/payments/insurances/insuranceNewPayment'))
const  InsuranceCreate = React.lazy(()=>import ('../pages/administration/payments/insurances/insuranceCreate'))
const  PropertyTaxDescription = React.lazy(()=>import ('../pages/administration/payments/propertyTax/propertyTaxDescription'))
const  PropertyTaxPayment = React.lazy(()=>import ('../pages/administration/payments/propertyTax/propertyTaxPayment'))
const  PropertyTaxNewPayment = React.lazy(()=>import ('../pages/administration/payments/propertyTax/propertyTaxNewPayment'))
const  PropertyTaxCreate = React.lazy(()=>import ('../pages/administration/payments/propertyTax/propertyTaxCreate'))
const  LeasingPaymentDescription = React.lazy(()=>import ('../pages/administration/payments/leasingAndRents/LeasingAndRentsDescription'))
const  LeasingPayment = React.lazy(()=>import ('../pages/administration/payments/leasingAndRents/leasingAndRentsPayment'))
const  LeasingNewPayment = React.lazy(()=>import ('../pages/administration/payments/leasingAndRents/leasingNewPayment'))
const  LeasingCreate = React.lazy(()=>import ('../pages/administration/payments/leasingAndRents/leasingAndRentsCreate'))
const  MantainanceDescription = React.lazy(()=>import ('../pages/administration/payments/mantainance/MantainanceDescription'))
const  MantainancePayment = React.lazy(()=>import ('../pages/administration/payments/mantainance/mantainancePayment'))
const  MantainanceNewPayment = React.lazy(()=>import ('../pages/administration/payments/mantainance/mantainanceNewPayment'))
const  MantainanceCreate = React.lazy(()=>import ('../pages/administration/payments/mantainance/mantainanceCreate'))
const  DebtDescription = React.lazy(()=>import ('../pages/administration/payments/debt/debtDescription'))
const  DebtPayment = React.lazy(()=>import ('../pages/administration/payments/debt/debtPayment'))
const  DebtNewPayment = React.lazy(()=>import ('../pages/administration/payments/debt/debtNewPayment'))
const  DebtCreate = React.lazy(()=>import ('../pages/administration/payments/debt/debtCreate'))
const  Collecting= React.lazy(()=>import ('../pages/administration/collecting/collecting'))
const  RentDescription= React.lazy(()=>import ('../pages/administration/collecting/leasingAndRents/rentsDescription'))
const  RentCollecting= React.lazy(()=>import ('../pages/administration/collecting/leasingAndRents/rentsCollecting'))
const  RentNewPayment= React.lazy(()=>import ('../pages/administration/collecting/leasingAndRents/rentNewPayment'))
const  RentCreate= React.lazy(()=>import ('../pages/administration/collecting/leasingAndRents/rentCreate'))
const  LoanDescription= React.lazy(()=>import ('../pages/administration/collecting/loans/loansDescription'))
const  LoanNewPayment= React.lazy(()=>import ('../pages/administration/collecting/loans/loanNewPayment'))
const  LoanCollecting= React.lazy(()=>import ('../pages/administration/collecting/loans/loanCollecting'))
const  LoanCreate= React.lazy(()=>import ('../pages/administration/collecting/loans/loanCreate'))
const  Assets = React.lazy(()=>import ('../pages/administration/assets/assets'))
const  Taxes= React.lazy(()=>import ('../pages/administration/taxes/taxes'))
const  TaxDescription= React.lazy(()=>import ('../pages/administration/taxes/taxesDescription'))
const  TaxReport= React.lazy(()=>import ('../pages/administration/taxes/taxesReport'))
const  TaxNewReport= React.lazy(()=>import ('../pages/administration/taxes/taxesNewReport'))
const  Providers= React.lazy(()=>import ('../pages/administration/providers/providers'))
const  ProviderCreate= React.lazy(()=>import ('../pages/administration/providers/providersCreate'))
const  ProviderService= React.lazy(()=>import ('../pages/administration/providers/providerService'))
const  ProviderNewService= React.lazy(()=>import ('../pages/administration/providers/providerNewService'))
const  ProviderDescription= React.lazy(()=>import ('../pages/administration/providers/providerDescription'))
/****************************** GOVERNANCE ****************************************/
const  FamilyStructure= React.lazy(()=>import ('../pages/governance/familyStructure/familyStructure'))
const  FamilyMemberCreate= React.lazy(()=>import ('../pages/governance/familyStructure/familyMemberCreate'))
const  FamilyMember= React.lazy(()=>import ('../pages/governance/familyStructure/familyMember'))
const  CouncilAndCommitties= React.lazy(()=>import ('../pages/governance/councilAndCommittee/councilAndCommittee'))
const  FamilyCouncil= React.lazy(()=>import ('../pages/governance/councilAndCommittee/familyCouncil'))
const  InvestmentCommitte= React.lazy(()=>import ('../pages/governance/councilAndCommittee/investmentCommittee'))
const  CouncilAndCommittiesAddMember= React.lazy(()=>import ('../pages/governance/councilAndCommittee/councilAndCommitteAddMember'))
const  MeetingCreate= React.lazy(()=>import ('../pages/governance/councilAndCommittee/components/meetings/meetingCreate'))
const  MeetingDescription= React.lazy(()=>import ('../pages/governance/councilAndCommittee/components/meetings/meetingDescription'))
const  VoatingCreate= React.lazy(()=>import ('../pages/governance/councilAndCommittee/components/voting/voatingCreate'));
const  VoatingDescription= React.lazy(()=>import ('../pages/governance/councilAndCommittee/components/voting/voatingDescription'))
const  WealthStructure= React.lazy(()=>import ('../pages/governance/wealthStructure/wealthStructure'))
const  WealthItem= React.lazy(()=>import ('../pages/governance/wealthStructure/wealthItemDescription/wealthItemDescription'))
const  StockResultCreate= React.lazy(()=>import ('../pages/governance/wealthStructure/wealthItemDescription/components/stockInvestment/newResultReport'))
const  PrivateEquityReturnsCreate= React.lazy(()=>import ('../pages/governance/wealthStructure/wealthItemDescription/components/privateEquity/newReturnReport'))
const  PrivateEquityReturn= React.lazy(()=>import ('../pages/governance/wealthStructure/wealthItemDescription/components/privateEquity/returnReport'))
const  StockResult= React.lazy(()=>import ('../pages/governance/wealthStructure/wealthItemDescription/components/stockInvestment/resultReport'))
const  WealthItemCreate= React.lazy(()=>import ('../pages/governance/wealthStructure/wealthItemCreate/wealthItemCreate'));
/****************************** INVESTMENTS ****************************************/
const  RealStateDashboard= React.lazy(()=>import ('../pages/investments/realState/realStateDashboard'))
const  LoansDashboard= React.lazy(()=>import ('../pages/investments/loans/loansDashboard'))


const  MediaObject= React.lazy(()=>import('../components/Bootstrap/MediaObject/MediaObject'))
const  Accordions= React.lazy(()=>import     ('../components/Bootstrap/Accordion/Accordion'))
const  Tabses= React.lazy(()=>import ('../components/Bootstrap/Tabs/Tabs'))
const  Modals= React.lazy(()=>import ('../components/Bootstrap/Modal/Modal'))
const  Tooltipandpopover= React.lazy(()=>import('../components/Bootstrap/Tooltipandpopover/Tooltipandpopover'))
const  Progress= React.lazy(()=>import   ('../components/Bootstrap/Progress/Progress'))
const  Carousels= React.lazy(()=>import    ('../components/Bootstrap/Carousels/Carousels'))
const  FormElements= React.lazy(()=>import ('../components/Components/Forms/FormElements/FormElements'))
const  FormLayouts= React.lazy(()=>import('../components/Components/Forms/FormLayouts/FormLayouts'))
const  FormAdvanced= React.lazy(()=>import ('../components/Components/Forms/FormAdvanced/FormAdvanced'))
const  FormEditor= React.lazy(()=>import     ('../components/Components/Forms/FormEditor/FormEditor'))
const  FormWizard= React.lazy(()=>import     ('../components/components/forms/formwizard/formwizard'))
const  FormValidation= React.lazy(()=>import   ('../components/components/forms/formvalidation/formvalidation'))
const  DataTables= React.lazy(()=>import     ('../components/components/tables/datatables/datatables'))
const  DefaultTables = React.lazy(()=>import  ('../components/components/tables/defaultable/defaulttables'))
const  Filemanager= React.lazy(()=>import('../components/Components/Filemanager/Filemanager/Filemanager'))
const  FilemanagerList= React.lazy(()=>import    ('../components/components/filemanager/filemanagerlist/filemanagerlist'))
const  FileDetails= React.lazy(()=>import('../components/components/filemanager/filedetails/filedetails'))
const  FileAttachments= React.lazy(()=>import    ('../components/components/filemanager/fileattachments/fileattachments'))
const  Profile = React.lazy(()=>import  ('../components/pages/profile/profile'))
const  NotificationsList= React.lazy(()=>import('../components/pages/notificationslist/notificationslist'))
const  Timeline= React.lazy(()=>import   ('../components/pages/timeline/timeline'))
const  MailCompose= React.lazy(()=>import('../components/pages/mailcompose/mailcompose'))
const  MailInbox= React.lazy(()=>import    ('../components/pages/mailinbox/mailinbox'))
const  MailRead= React.lazy(()=>import   ('../components/pages/mailread/mailread'))
const  Gallery= React.lazy(()=>import  ('../components/pages/gallery/gallery'))
const  Aboutcompany= React.lazy(()=>import ('../components/pages/extension/aboutcompany/aboutcompany'))
const  Services= React.lazy(()=>import   ('../components/pages/extension/services/services'))
const  Faqs= React.lazy(()=>import('../components/pages/extension/faqs/faqs'))
const  Terms= React.lazy(()=>import('../components/pages/extension/terms/terms'))
const  Invoice= React.lazy(()=>import  ('../components/pages/extension/invoice/invoice'))
const  Pricingtables= React.lazy(()=>import  ('../components/pages/extension/pricingtables/pricingtables'))
const  Settings= React.lazy(()=>import   ('../components/pages/extension/settings/settings'))
const  Blog= React.lazy(()=>import ('../components/pages/extension/blog/blog'))
const  Blogdetails= React.lazy(()=>import ('../components/pages/extension/blogdetails/blogdetails'))
const  Blogpost= React.lazy(()=>import('../components/pages/extension/blogpost/blogpost'))
const  Emptypage= React.lazy(()=>import ('../components/pages/extension/emptypage/emptypage'))
const  Shop= React.lazy(()=>import ('../components/ecommerce/shop/shop'))
const  ProductDetails= React.lazy(()=>import ('../components/ecommerce/productdetails/productdetails'))
const  ShoppingCart= React.lazy(()=>import  ('../components/ecommerce/shoppingcart/shoppingcart'))
const  AddProduct= React.lazy(()=>import  ('../components/ecommerce/addproduct/addproduct'))
const  Wishlist= React.lazy(()=>import('../components/ecommerce/wishlist/wishlist'))
const  Checkout= React.lazy(()=>import  ('../components/ecommerce/checkout/checkout'))
const  LeafletMaps= React.lazy(()=>import ('../components/maps/leafletmaps/leafletmaps'))
const  SimpleMaps= React.lazy(()=>import  ('../components/maps/simplemaps/simplemaps'))
const  ChartJS= React.lazy(()=>import  ('../components/charts/chartjs/chartjs'))
const  ECharts= React.lazy(()=>import  ('../components/charts/echarts/echarts'))
const  ApexCharts= React.lazy(()=>import ('../components/charts/apexcharts/apexcharts'))
const  FontAwesome= React.lazy(()=>import ('../components/icons/fontawesome/fontawesome'))
const  MaterialDesignIcons= React.lazy(()=>import  ('../components/icons/materialdesignicons/materialdesignicons'))
const  SimpleLineIcons= React.lazy(()=>import ('../components/icons/simplelineicons/simplelineicons'))
const  FeatherIcons= React.lazy(()=>import ('../components/icons/featherIcons/featherIcons'))
const  IconicIcons= React.lazy(()=>import  ('../components/icons/iconicicons/iconicicons'))
const  FlagIcons= React.lazy(()=>import  ('../components/icons/flagicons/flagicons'))
const  Pe7Icons= React.lazy(()=>import('../components/icons/pe7icons/pe7icons'))
const  ThemifyIcons= React.lazy(()=>import  ('../components/icons/themifyicons/themifyicons'))
const  TypiconsIcons= React.lazy(()=>import ('../components/icons/typiconsicons/typiconsicons'))
const  WeatherIcons= React.lazy(()=>import('../components/icons/weathericons/weathericons'))
const  BootstrapIcons= React.lazy(()=>import ('../components/icons/bootstrapIcons/bootstrapIcons'))
const  Navigation= React.lazy(()=>import('../components/bootstrap/navigation/navigation'))
export const Routingdata=[

/* Firebase Authetication */




/* Dashboard page */
{path:`${import.meta.env.BASE_URL}dashboard/sales` ,element : <Sales/>},
{path:`${import.meta.env.BASE_URL}dashboard/ecommerce` ,element:<Ecommerce />},
{path:`${import.meta.env.BASE_URL}dashboard/analytics` ,element:<Analytics />},
{path:`${import.meta.env.BASE_URL}dashboard/medical` ,element:<Medical />},
{path:`${import.meta.env.BASE_URL}dashboard/crypto` ,element:<Crypto />},

/* App page */

{path:`${import.meta.env.BASE_URL}apps/cardsdesign` ,element:<Cardsdesign />},
{path:`${import.meta.env.BASE_URL}apps/defaultcalender` ,element:<Defaultcalender />},
{path:`${import.meta.env.BASE_URL}apps/fulcalender` ,element:<Fulcalender />},
{path:`${import.meta.env.BASE_URL}apps/chat` ,element:<Chat />},
{path:`${import.meta.env.BASE_URL}apps/notifications` ,element:<Notifications />},
{path:`${import.meta.env.BASE_URL}apps/sweetalerts` ,element:<SweetAlerts />},
{path:`${import.meta.env.BASE_URL}apps/rangeslider` ,element:<Rangeslider />},
{path:`${import.meta.env.BASE_URL}apps/contentscrollbar` ,element:<Contentscrollbar />},
{path:`${import.meta.env.BASE_URL}apps/loaders` ,element:<Loaders />},
{path:`${import.meta.env.BASE_URL}apps/counters` ,element:<Counters />},
{path:`${import.meta.env.BASE_URL}apps/rating` ,element:<Ratings />},
{path:`${import.meta.env.BASE_URL}apps/treeview` ,element:<Treeviews />},
{path:`${import.meta.env.BASE_URL}apps/footers` ,element:<Footers />},
{path:`${import.meta.env.BASE_URL}apps/userlist` ,element:<Userlist />},
{path:`${import.meta.env.BASE_URL}apps/search` ,element:<Search />},
{path:`${import.meta.env.BASE_URL}apps/cryptocurrencies` ,element:<Cryptocurrencies />},
{path:`${import.meta.env.BASE_URL}apps/widgets` ,element:<Widgets />},

/* Bootstrap page  */

{path:`${import.meta.env.BASE_URL}bootstrap/alerts` ,element:<Alerts />},
{path:`${import.meta.env.BASE_URL}bootstrap/buttons` ,element:<Buttons />},
{path:`${import.meta.env.BASE_URL}bootstrap/colors` ,element:<Colors />},
{path:`${import.meta.env.BASE_URL}bootstrap/avatarsquare` ,element:<Avatarsquare />},
{path:`${import.meta.env.BASE_URL}bootstrap/avatarradius` ,element:<AvatarRadius />},
{path:`${import.meta.env.BASE_URL}bootstrap/avatarrounded` ,element:<AvatarRounded />},
{path:`${import.meta.env.BASE_URL}bootstrap/dropdowns` ,element:<Dropdowns />},
{path:`${import.meta.env.BASE_URL}bootstrap/listgroup` ,element:<ListGroups />},
{path:`${import.meta.env.BASE_URL}bootstrap/tags` ,element:<Tags />},
{path:`${import.meta.env.BASE_URL}bootstrap/pagination` ,element:<Paginations />},
{path:`${import.meta.env.BASE_URL}bootstrap/navigation` ,element:<Navigation />},
{path:`${import.meta.env.BASE_URL}bootstrap/typography` ,element:<Typography />},
{path:`${import.meta.env.BASE_URL}bootstrap/breadcrumbs` ,element:<Breadcrumbs />},
{path:`${import.meta.env.BASE_URL}bootstrap/badgespills` ,element:<BadgesPills />},
{path:`${import.meta.env.BASE_URL}bootstrap/thumbnails` ,element:<Thumbnails />},
{path:`${import.meta.env.BASE_URL}bootstrap/offcanvas` ,element:<Offcanva />},
{path:`${import.meta.env.BASE_URL}bootstrap/toast` ,element:<Toasts />},
{path:`${import.meta.env.BASE_URL}bootstrap/mediaobject` ,element:<MediaObject />},
{path:`${import.meta.env.BASE_URL}bootstrap/accordion` ,element:<Accordions />},
{path:`${import.meta.env.BASE_URL}bootstrap/tabs` ,element:<Tabses />},
{path:`${import.meta.env.BASE_URL}bootstrap/modal` ,element:<Modals />},
{path:`${import.meta.env.BASE_URL}bootstrap/tooltipandpopover` ,element:<Tooltipandpopover />},
{path:`${import.meta.env.BASE_URL}bootstrap/progress` ,element:<Progress />},
{path:`${import.meta.env.BASE_URL}bootstrap/carousels` ,element:<Carousels />},

/* Components */

{path:`${import.meta.env.BASE_URL}components/forms/formelements` ,element:<FormElements />},
{path:`${import.meta.env.BASE_URL}components/forms/formlayouts` ,element:<FormLayouts />},
{path:`${import.meta.env.BASE_URL}components/forms/formadvanced` ,element:<FormAdvanced />},
{path:`${import.meta.env.BASE_URL}components/forms/formeditor` ,element:<FormEditor />},
{path:`${import.meta.env.BASE_URL}components/forms/formwizard` ,element:<FormWizard />},
{path:`${import.meta.env.BASE_URL}components/forms/formvalidation` ,element:<FormValidation />},
{path:`${import.meta.env.BASE_URL}components/tables/datatables` ,element:<DataTables />},
{path:`${import.meta.env.BASE_URL}components/tables/defaulttable` ,element:<DefaultTables />},
{path:`${import.meta.env.BASE_URL}components/filemanager/filemanager` ,element:<Filemanager />},
{path:`${import.meta.env.BASE_URL}components/filemanager/filemanagerlist` ,element:<FilemanagerList />},
{path:`${import.meta.env.BASE_URL}components/filemanager/filedetails` ,element:<FileDetails />},
{path:`${import.meta.env.BASE_URL}components/filemanager/fileattachments` ,element:<FileAttachments />},

/* Pages */

{path:`${import.meta.env.BASE_URL}pages/profile` ,element:<Profile />},
{path:`${import.meta.env.BASE_URL}pages/notificationslist` ,element:<NotificationsList />},
{path:`${import.meta.env.BASE_URL}pages/timeline` ,element:<Timeline />},
{path:`${import.meta.env.BASE_URL}pages/mailcompose` ,element:<MailCompose />},
{path:`${import.meta.env.BASE_URL}pages/mailinbox` ,element:<MailInbox />},
{path:`${import.meta.env.BASE_URL}pages/mailread` ,element:<MailRead />},
{path:`${import.meta.env.BASE_URL}pages/gallery` ,element:<Gallery />},
{path:`${import.meta.env.BASE_URL}pages/extension/aboutcompany` ,element:<Aboutcompany />},
{path:`${import.meta.env.BASE_URL}pages/extension/services` ,element:<Services />},
{path:`${import.meta.env.BASE_URL}pages/extension/faqs` ,element:<Faqs />},
{path:`${import.meta.env.BASE_URL}pages/extension/terms` ,element:<Terms />},
{path:`${import.meta.env.BASE_URL}pages/extension/invoice` ,element:<Invoice />},
{path:`${import.meta.env.BASE_URL}pages/extension/pricingtables` ,element:<Pricingtables />},
{path:`${import.meta.env.BASE_URL}pages/extension/settings` ,element:<Settings />},
{path:`${import.meta.env.BASE_URL}pages/extension/blog` ,element:<Blog />},
{path:`${import.meta.env.BASE_URL}pages/extension/blogdetails` ,element:<Blogdetails />},
{path:`${import.meta.env.BASE_URL}pages/extension/blogpost` ,element:<Blogpost />},
{path:`${import.meta.env.BASE_URL}pages/extension/emptypage` ,element:<Emptypage />},

/****************************** ADMINISTRATION ****************************************/
/* Family office */
{path:`${import.meta.env.BASE_URL}administration/accounting` ,element : <CompanyDescription/>},
{path:`${import.meta.env.BASE_URL}administration/payments` ,element : <Payments/>},

/* Companies */
{path:`${import.meta.env.BASE_URL}administration/companies` ,element : <Companies/>},
{path:`${import.meta.env.BASE_URL}administration/company/:id/:type` ,element : <CompanyDescription/>},
{path:`${import.meta.env.BASE_URL}administration/company/:id/report/:reportId/type/:type` ,element : <CompanyReport/>},
{path:`${import.meta.env.BASE_URL}administration/companyNewReport/:id/type/:type` ,element : <CompanyReportCreate/>},
{path:`${import.meta.env.BASE_URL}administration/companyCreate` ,element : <CompanyCreate/>},

/* Trusts */
{path:`${import.meta.env.BASE_URL}administration/trustCreate` ,element : <TrustCreate/>},
{path:`${import.meta.env.BASE_URL}administration/trustDescription/:id` ,element : <TrustDescription/>},

/*Payment Insurances */
{path:`${import.meta.env.BASE_URL}administration/insuraceDescription/:id` ,element : <InsuraceDescription/>},
{path:`${import.meta.env.BASE_URL}administration/insurancePayment/:id/payment/:paymentId` ,element : <InsurancePayment/>},
{path:`${import.meta.env.BASE_URL}administration/insuranceNewPayment/:id` ,element : <InsuranceNewPayment/>},
{path:`${import.meta.env.BASE_URL}administration/insuranceCreate/type/:type/itemId/:itemId` ,element : <InsuranceCreate/>},

/*Payment PropertyTax */
{path:`${import.meta.env.BASE_URL}administration/propertyTaxDescription/:id` ,element : <PropertyTaxDescription/>},
{path:`${import.meta.env.BASE_URL}administration/propertyTaxPayment/:id/payment/:paymentId` ,element : <PropertyTaxPayment/>},
{path:`${import.meta.env.BASE_URL}administration/propertyTaxNewPayment/:id` ,element : <PropertyTaxNewPayment/>},
{path:`${import.meta.env.BASE_URL}administration/propertyTaxCreate/:id` ,element : <PropertyTaxCreate/>},

/*Payment LeasingAndRent */
{path:`${import.meta.env.BASE_URL}administration/leasingPaymentDescription/:id` ,element : <LeasingPaymentDescription/>},
{path:`${import.meta.env.BASE_URL}administration/leasingPayment/:id/payment/:paymentId` ,element : <LeasingPayment/>},
{path:`${import.meta.env.BASE_URL}administration/leasingNewPayment/:id` ,element : <LeasingNewPayment/>},
{path:`${import.meta.env.BASE_URL}administration/leasingCreate` ,element : <LeasingCreate/>},

/*Payment Mantainance */
{path:`${import.meta.env.BASE_URL}administration/mantainanceDescription/:id` ,element : <MantainanceDescription/>},
{path:`${import.meta.env.BASE_URL}administration/mantainancePayment/:id/payment/:paymentId` ,element : <MantainancePayment/>},
{path:`${import.meta.env.BASE_URL}administration/mantainanceNewPayment/:id/` ,element : <MantainanceNewPayment/>},
{path:`${import.meta.env.BASE_URL}administration/mantainanceCreate/type/:type/itemId/:itemId` ,element : <MantainanceCreate/>},

/*Payment Debt */
{path:`${import.meta.env.BASE_URL}administration/debtDescription/:id` ,element : <DebtDescription/>},
{path:`${import.meta.env.BASE_URL}administration/debtPayment/:id/payment/:paymentId` ,element : <DebtPayment/>},
{path:`${import.meta.env.BASE_URL}administration/debtNewPayment/:id/` ,element : <DebtNewPayment/>},
{path:`${import.meta.env.BASE_URL}administration/debtCreate/type/:type/itemId/:itemId` ,element : <DebtCreate/>},

/*Collecting loan*/
{path:`${import.meta.env.BASE_URL}administration/collecting` ,element : <Collecting/>},
{path:`${import.meta.env.BASE_URL}administration/loanDescription/:id` ,element : <LoanDescription/>},
{path:`${import.meta.env.BASE_URL}administration/loanNewPayment/:id` ,element : <LoanNewPayment/>},
{path:`${import.meta.env.BASE_URL}administration/loanCollecting/:id/payment/:paymentId` ,element : <LoanCollecting/>},
{path:`${import.meta.env.BASE_URL}administration/loanCreate` ,element : <LoanCreate/>},
/*Collecting rent*/
{path:`${import.meta.env.BASE_URL}administration/rentDescription/:id` ,element : <RentDescription/>},
{path:`${import.meta.env.BASE_URL}administration/rentCollecting/:id/payment/:paymentId` ,element : <RentCollecting/>},
{path:`${import.meta.env.BASE_URL}administration/rentNewPayment/:id` ,element : <RentNewPayment/>},
{path:`${import.meta.env.BASE_URL}administration/rentCreate/type/:type/itemId/:itemId` ,element : <RentCreate/>},

/* Taxes */
{path:`${import.meta.env.BASE_URL}administration/taxes` ,element : <Taxes/>},
{path:`${import.meta.env.BASE_URL}administration/taxes/:id` ,element : <TaxDescription/>},
{path:`${import.meta.env.BASE_URL}administration/taxes/:id/type/:type/report/:reportId` ,element : <TaxReport/>},
{path:`${import.meta.env.BASE_URL}administration/taxes/:id/type/:type/newReport` ,element : <TaxNewReport/>},

/* Providers */
{path:`${import.meta.env.BASE_URL}administration/providers` ,element : <Providers/>},
{path:`${import.meta.env.BASE_URL}administration/providerCreate/:type` ,element : <ProviderCreate/>},
{path:`${import.meta.env.BASE_URL}administration/providerDescription/:id/provider/:providerId` ,element : <ProviderDescription/>},
{path:`${import.meta.env.BASE_URL}administration/providerNewService/:id/provider/:providerId` ,element : <ProviderNewService/>},
{path:`${import.meta.env.BASE_URL}administration/providerService/:id/provider/:providerId/service/:serviceId` ,element : <ProviderService/>},

/* Assets */
{path:`${import.meta.env.BASE_URL}administration/assets` ,element : <Assets/>},
/****************************** GOVERNANCE ****************************************/
/* Family structure */
{path:`${import.meta.env.BASE_URL}governance/familyStructure` ,element : <FamilyStructure/>},
{path:`${import.meta.env.BASE_URL}governance/familyMemberCreate/source/:source/gen/:gen` ,element : <FamilyMemberCreate/>},
{path:`${import.meta.env.BASE_URL}governance/familyMember/:id` ,element : <FamilyMember/>},
/* Councils and committees */
{path:`${import.meta.env.BASE_URL}governance/councilAndCommittee` ,element : <CouncilAndCommitties/>},
{path:`${import.meta.env.BASE_URL}governance/familyCouncil` ,element : <FamilyCouncil/>},
{path:`${import.meta.env.BASE_URL}governance/investmentCommittee` ,element : <InvestmentCommitte/>},
{path:`${import.meta.env.BASE_URL}governance/councilAndCommittee/addMember/:type` ,element : <CouncilAndCommittiesAddMember/>},
{path:`${import.meta.env.BASE_URL}governance/councilAndCommittee/meetingCreate/:type` ,element : <MeetingCreate/>},
{path:`${import.meta.env.BASE_URL}governance/councilAndCommittee/meetingDescription/type/:type/id/:id` ,element : <MeetingDescription/>},
{path:`${import.meta.env.BASE_URL}governance/councilAndCommittee/voatingCreate/:type` ,element : <VoatingCreate/>},
{path:`${import.meta.env.BASE_URL}governance/councilAndCommittee/voatingDescription/type/:type/id/:id` ,element : <VoatingDescription/>},
/* Wealth structure */
{path:`${import.meta.env.BASE_URL}governance/wealthStructure` ,element : <WealthStructure/>},
{path:`${import.meta.env.BASE_URL}governance/wealthItem/type/:type/id/:id` ,element : <WealthItem/>},
{path:`${import.meta.env.BASE_URL}governance/wealthItemCreate/:type` ,element : <WealthItemCreate/>},
{path:`${import.meta.env.BASE_URL}governance/stockResult/:id` ,element : <StockResultCreate/>},
{path:`${import.meta.env.BASE_URL}governance/stockResult/:id/resultId/:resultId` ,element : <StockResult/>},
{path:`${import.meta.env.BASE_URL}governance/privateEquityResultCreate/:id` ,element : <PrivateEquityReturnsCreate/>},
{path:`${import.meta.env.BASE_URL}governance/privateEquityResult/:id/returnId/:returnId` ,element : <PrivateEquityReturn/>},
{path:`${import.meta.env.BASE_URL}ecommerce/shop` ,element:<Shop />},
{path:`${import.meta.env.BASE_URL}ecommerce/productdetails` ,element:<ProductDetails />},
{path:`${import.meta.env.BASE_URL}ecommerce/productdetails/:id` ,element:<ProductDetails />},
{path:`${import.meta.env.BASE_URL}ecommerce/shoppingcart` ,element:<ShoppingCart />},
{path:`${import.meta.env.BASE_URL}ecommerce/addproduct` ,element:<AddProduct />},
{path:`${import.meta.env.BASE_URL}ecommerce/wishlist` ,element:<Wishlist />},
{path:`${import.meta.env.BASE_URL}ecommerce/checkout` ,element:<Checkout />},

/****************************** INVESTMENTS ****************************************/
{path:`${import.meta.env.BASE_URL}investments/realStateDashboard` ,element : <RealStateDashboard/>},
{path:`${import.meta.env.BASE_URL}investments/loansDashboard` ,element : <LoansDashboard/>},

/* Maps */


{path:`${import.meta.env.BASE_URL}maps/leafletmaps` ,element:<LeafletMaps />},
{path:`${import.meta.env.BASE_URL}maps/simplemaps` ,element:<SimpleMaps />},


/* Charts */

{path:`${import.meta.env.BASE_URL}charts/chartjs` ,element:<ChartJS />},
{path:`${import.meta.env.BASE_URL}charts/echarts` ,element:<ECharts />},
{path:`${import.meta.env.BASE_URL}charts/apexcharts` ,element:<ApexCharts />},

/* Icons */

{path:`${import.meta.env.BASE_URL}icons/fontawesome` ,element:<FontAwesome />},
{path:`${import.meta.env.BASE_URL}icons/materialdesignicons` ,element:<MaterialDesignIcons />},
{path:`${import.meta.env.BASE_URL}icons/simplelineicons` ,element:<SimpleLineIcons />},
{path:`${import.meta.env.BASE_URL}icons/feathericons` ,element:<FeatherIcons />},
{path:`${import.meta.env.BASE_URL}icons/iconicicons` ,element:<IconicIcons />},
{path:`${import.meta.env.BASE_URL}icons/flagicons` ,element:<FlagIcons />},
{path:`${import.meta.env.BASE_URL}icons/pe7icons` ,element:<Pe7Icons />},
{path:`${import.meta.env.BASE_URL}icons/themifyicons` ,element:<ThemifyIcons />},
{path:`${import.meta.env.BASE_URL}icons/typiconsicons` ,element:<TypiconsIcons />},
{path:`${import.meta.env.BASE_URL}icons/weathericons` ,element:<WeatherIcons />},
{path:`${import.meta.env.BASE_URL}icons/bootstrapicons` ,element:<BootstrapIcons />}

]