import Header from '../components/Header'
import MainAddForm from '../components/addpost/MainAddForm'
import MainLayout from '../layouts/MainLayout'

const AddPost = () => {
    return (
        <MainLayout overflow={false}>
            <Header />
            <MainAddForm />
        </MainLayout>
    )
}

export default AddPost
