import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/prejunior/PreJunior";
import Error404 from "./pages/Error404";
import {PATH} from "./HW5";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";


function Routes() {
    return (
        <>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} exact render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} exact render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} exact render={() => <JuniorPlus/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </>
    );
}

export default Routes;