export default function HobbyLinks() {
    let hobbyLinks = ["https://climbsoill.com/", "https://www.pathofexile.com/"];

    return (
        <div>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]} target = "blank">Rock Climbing</a> <br></br>
            <a href = {hobbyLinks[1]} target = "blank">Path of Exile</a>
        </div>
    );
}