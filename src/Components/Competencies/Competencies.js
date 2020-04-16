import { Link } from 'react-router-dom'



//Link
<Link to="/register" className="input-container-button">
  Register
            </Link>

//HTML section
  <section> <h1>Pink Flamingos</h1>  <p>Flamings are Pink</p> </section>

//script tag
<script> 
    content..
        </script>  

  //request level middleware this would be in the server I'm just putting everything here
  app.get('/api/test', function(req,res,next){
    console.log('callback one')
    next();
}, function(req,res,next){
    console.log('callback two')
    next();
}, function(req,res){
    console.log('callback three')
    res.send('Send a response!');
});

//DB stuff that would be in the db folder and .sql files created in sql tabs
//ALTER TABLE
ALTER TABLE users ADD COLUMN user_password VARCHAR (255);

//many-many
CREATE TABLE family (
  parents_id INT,
  FOREIGN KEY(parents_id) REFERENCES parents(parents_id),
  kid_id INT,
  FOREIGN KEY(kid_id) REFERENCES kids(kid_id)
);

//subqueries
SELECT *
FROM family
WHERE parents_id IN (
	SELECT kid_id
  FROM kids
  WHERE type = 'name'
  AND age >= 25
)

//componentdidmount

componentDidMount(){
  // here is where will be exectued when the component mounts this is only executed once and not on a rerender fro updating state
  alert('Hello World!')
}

//REST 
app.get('/api/posts/:id', ctrl.getPosts)
app.post('/api/posts/:id', ctrl.addPost)
app.put('/api/posts/:id', ctrl.editPost)
app.delete('/api/posts/:id', ctrl.deletePost)

 //REDUX promise-middleware

 export function getUser(userObj) {
  return {
      type: GET_USER,
      payload: userObj
  }

  export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_USER:
        return { ...state, user: payload };

















