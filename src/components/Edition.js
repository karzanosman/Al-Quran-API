import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withRouter from 'react-router-dom/withRouter';
import axios from 'axios';
import  Divider  from '@material-ui/core/Divider';
import Loading from './Loading'
import Error from './Error'


class App extends Component {
  state = {
    data: null,
    loading:false,
    error:false
  };
  componentDidMount() {
    const identifier = this.props.match.params.identifier || null;
    this.setState({
      loading:true
    })
      axios
        .get(`https://api.alquran.cloud/quran/${identifier}`)
        .then(res => {

          this.setState({
            loading:false,
            data: res.data.data
          });
        })
        .catch(err => {
          this.setState({
            error:true
          })
          console.log(err);
        });
  }
  render() {

    const { data , loading, error} = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Editions</h1>
        {loading && (
          <Loading></Loading>
        )}
        {error && (
          <Error></Error>
        )}
        {data && (
          <React.Fragment>
            <React.Fragment>
              <Paper
                elevation={8}
                square
                style={{
                  margin: '0 auto',
                  width: '50%',
                  padding: '10px',
                  marginBottom: '5px'
                }}
              >
                <p>
                  <b>englishName</b>:{data.edition.englishName}
                </p>
                <p>
                  <b>format:</b>
                  {data.edition.format}
                </p>
                <p>
                  <b>identifier</b>:{data.edition.identifier}
                </p>
                <p>
                  <b>language</b>:{data.edition.language}
                </p>
                <p>
                  <b>name</b>:{data.edition.name}
                </p>
                <p>
                  <b>type</b>:{data.edition.type}
                </p>
              </Paper>
            </React.Fragment>
            <React.Fragment>
              {data.surahs.map((surah, index) => (
                <Paper
                  key={index}
                  elevation={8}
                  square
                  style={{
                    margin: '0 auto',
                    padding: '10px',
                    marginBottom: '5px'
                  }}
                >
                  <p>
                    <b> englishName</b>:{surah.englishName}
                  </p>
                  <p>
                    <b> englishNameTranslation</b>:{
                      surah.englishNameTranslation
                    }
                  </p>
                  <p>
                    <b> name</b>:{surah.name}
                  </p>
                  <p>
                    <b> number</b>:{surah.number}
                  </p>
                  <p>
                    <b> revelationType</b>:{surah.revelationType}
                  </p>
                  <Divider light={true} />
                  <p>fist aya for demo purpose</p>
                  <Divider light={true} />

                  <p>
                    {surah.ayahs[0].text}
                  </p>
                </Paper>
              ))}
            </React.Fragment>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(App);
