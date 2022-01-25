
import Profile from './Profile';
const apiurl = 'https://localhost:44357/api/values/';
export default function Users(props) {


    let tempname = '';

    const chgtext = (e) => { // tempname=text from textbox
        tempname = e.target.value;
    }

//Get from server all the id
const btngetid = () => {

        fetch(apiurl + tempname , {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',

            })
        })
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch btnFetchGetStudents= ", result);
                    console.log('result.Name=', result[0].Name);
                    props.setid(result);
                },
                (error) => {
                    console.log("err post=", error);
                });

        console.log('END');
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <input onChange={chgtext} type="text" placeholder="Enter ID" /><br />
            
            <button onClick={btngetid} className="btns btn--outline btn--large">Get Started</button>
            <Profile person={props.id}></Profile>
        </div>
    )
}