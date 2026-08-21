/** Series and Expression Directory: シリーズ単位と001内の表現単位を分けてルーティングする。 */
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Chapter001 from "./pages/Chapter001";
import SeriesHub from "./pages/SeriesHub";
import StructureExpression from "./pages/StructureExpression";
import MapExpression from "./pages/MapExpression";
import TimelineExpression from "./pages/TimelineExpression";
import FutureSeries from "./pages/FutureSeries";
import { getSeries } from "./data/series";

function Router() {
  const futureSeries = ["002", "003", "004"].map(getSeries).filter(Boolean);
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/001" component={SeriesHub} />
    <Route path="/001/desktop" component={Chapter001} />
    <Route path="/001/structure" component={StructureExpression} />
    <Route path="/001/map" component={MapExpression} />
    <Route path="/001/timeline" component={TimelineExpression} />
    {futureSeries.map((item) => item && <Route key={item.id} path={`/${item.id}`}>{() => <FutureSeries currentSeries={item} />}</Route>)}
    <Route component={NotFound} />
  </Switch>;
}

export default function App() { return <ErrorBoundary><Router /></ErrorBoundary>; }

