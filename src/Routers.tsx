import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './Pages/Home'
import { Issue } from './Pages/Issue'


export function Router() {

    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route element={<Home />} path='/' />
                <Route path="issue/:id" element={<Issue />} />
            </Route>
        </Routes>
    )

}