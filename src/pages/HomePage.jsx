import EntryForm from "../components/EntryForm";
import LatestXPosts from "../components/LatestXPosts";


export default function HomePage(){
    return(
        <>
            <h1>Home Page</h1>
            {/*New post form: */}
            <EntryForm />
            {/*Lates x amount of posts*/}
            <LatestXPosts limit={3} />

        </>
    );
}