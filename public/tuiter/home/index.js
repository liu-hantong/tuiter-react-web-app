import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import HomeComponent from "../HomeScreen/HomeComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-black">
    ${NavigationSidebar('Home')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 bg-black">
    ${HomeComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-black">
    ${PostSummaryList()}
   </div>
  </div>
   `);
}
$(exploreComponent);