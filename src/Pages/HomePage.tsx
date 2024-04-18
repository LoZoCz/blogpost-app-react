import Header from '../components/Header'
import MainPostListSect from '../components/homepage/MainPostListSect'
import MainLayout from '../layouts/MainLayout'

const HomePage = () => {
    return (
        <MainLayout>
            <Header />
            <MainPostListSect />
        </MainLayout>
    )
}

export default HomePage
