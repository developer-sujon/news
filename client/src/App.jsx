import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import CategoryPage from "./pages/SportsPage/CategoryPage/CategoryPage";
import SubCategoryPage from "./pages/SportsPage/SubCategoryPage/SubCategoryPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home label={"প্রচ্ছদ"} />} />
          <Route path="/national" element={<Home label={"জাতীয়"} />} />
          <Route path="/politics">
            <Route index element={<CategoryPage label={"রাজনীতি"} />} />
            <Route
              path="awami-league"
              element={<SubCategoryPage label={"আওয়ামী লীগ"} />}
            />
            <Route
              path="awami-league/:slug"
              element={<SinglePage label={"আওয়ামী লীগ"} />}
            />
            <Route path="bnp" element={<SubCategoryPage label={"বিএনপি"} />} />
            <Route path="bnp/:slug" element={<SinglePage label={"বিএনপি"} />} />
            <Route
              path="others"
              element={<SubCategoryPage label={"অন্যান্য"} />}
            />
            <Route
              path="others/:slug"
              element={<SinglePage label={"অন্যান্য"} />}
            />
          </Route>
          <Route path="/international">
            <Route index element={<CategoryPage label={"আন্তর্জাতিক"} />} />
            <Route
              path="america"
              element={<SubCategoryPage label={"আমেরিকা"} />}
            />
            <Route
              path="america/:slug"
              element={<SinglePage label={"আমেরিকা"} />}
            />
            <Route
              path="europe"
              element={<SubCategoryPage label={"ইউরোপ"} />}
            />
            <Route
              path="europe/:slug"
              element={<SinglePage label={"ইউরোপ"} />}
            />
            <Route
              path="australia"
              element={<SubCategoryPage label={"অস্ট্রেলিয়া"} />}
            />
            <Route
              path="australia/:slug"
              element={<SinglePage label={"অস্ট্রেলিয়া"} />}
            />
            <Route path="asia" element={<SubCategoryPage label={"এশিয়া"} />} />
            <Route path="asia/:slug" element={<SinglePage label={"এশিয়া"} />} />
            <Route
              path="africa"
              element={<SubCategoryPage label={"আফ্রিকা"} />}
            />
            <Route
              path="africa/:slug"
              element={<SinglePage label={"আফ্রিকা"} />}
            />
            <Route
              path="middle-east"
              element={<SubCategoryPage label={"মধ্যপ্রাচ্য"} />}
            />
            <Route
              path="middle-east/:slug"
              element={<SinglePage label={"মধ্যপ্রাচ্য"} />}
            />
          </Route>
          <Route path="/economy">
            <Route index element={<CategoryPage label={"অর্থনীতি"} />} />
            <Route
              path="commercial"
              element={<SubCategoryPage label={"কর্পোরেট"} />}
            />
            <Route
              path="commercial/:slug"
              element={<SinglePage label={"কর্পোরেট"} />}
            />
          </Route>
          <Route path="/sports">
            <Route index element={<CategoryPage label={"খেলা"} />} />
            <Route
              path="cricket"
              element={<SubCategoryPage label={"ক্রিকেট"} />}
            />
            <Route
              path="cricket/:slug"
              element={<SinglePage label={"ক্রিকেট"} />}
            />
            <Route
              path="football"
              element={<SubCategoryPage label={"ফুটবল"} />}
            />
            <Route
              path="football/:slug"
              element={<SinglePage label={"ফুটবল"} />}
            />
            <Route
              path="other"
              element={<SubCategoryPage label={"অন্যান্য"} />}
            />
            <Route
              path="other/:slug"
              element={<SinglePage label={"অন্যান্য"} />}
            />
          </Route>
          <Route
            path="/entertainment"
            element={<CategoryPage label={"বিনোদন"} />}
          />
          <Route path="/countries">
            <Route index element={<CategoryPage label={"সারাদেশ"} />} />
            <Route path="dhaka" element={<SubCategoryPage label={"ঢাকা"} />} />
            <Route path="dhaka/:slug" element={<SinglePage label={"ঢাকা"} />} />
            <Route
              path="chattogram"
              element={<SubCategoryPage label={"চট্টগ্রাম"} />}
            />
            <Route
              path="chattogram/:slug"
              element={<SinglePage label={"চট্টগ্রাম"} />}
            />
            <Route
              path="khulna"
              element={<SubCategoryPage label={"খুলনা"} />}
            />
            <Route
              path="khulna/:slug"
              element={<SinglePage label={"খুলনা"} />}
            />
            <Route
              path="rajshahi"
              element={<SubCategoryPage label={"রাজশাহী"} />}
            />
            <Route
              path="rajshahi/:slug"
              element={<SinglePage label={"রাজশাহী"} />}
            />
            <Route
              path="sylhet"
              element={<SubCategoryPage label={"সিলেট"} />}
            />
            <Route
              path="sylhet/:slug"
              element={<SinglePage label={"সিলেট"} />}
            />
            <Route
              path="barishal"
              element={<SubCategoryPage label={"বরিশাল"} />}
            />
            <Route
              path="barishal/:slug"
              element={<SinglePage label={"বরিশাল"} />}
            />
            <Route
              path="rangpur"
              element={<SubCategoryPage label={"রংপুর"} />}
            />
            <Route
              path="rangpur/:slug"
              element={<SinglePage label={"রংপুর"} />}
            />
            <Route
              path="mymensingh"
              element={<SubCategoryPage label={"ময়মনসিংহ"} />}
            />
            <Route
              path="mymensingh/:slug"
              element={<SinglePage label={"ময়মনসিংহ"} />}
            />
          </Route>
          <Route
            path="/lifestyle"
            element={<CategoryPage label={"লাইফস্টাইল"} />}
          />
          <Route
            path="/photo-story"
            element={<CategoryPage label={"ছবির গল্প"} />}
          />

          <Route
            path="/video"
            element={<CategoryPage label={"ভিডিও গ্যালারি"} />}
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
