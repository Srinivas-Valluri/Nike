pipeline {
  agent any
  tools {nodejs "Node_plugin(20.8.0)"}
  stages {
    stage("build"){
      steps {
        echo 'This is build stage in agent'
        script {
            def test = 2+2>3 ? 'cool commit': 'not cool commit'
            echo test
        }
        sh 'npm install'
      }
    }
    stage("test"){
      steps {
        echo 'This is test stage in agent'
      }
    }
    stage("deploy"){
      steps {
        echo 'This is deploy stage in agent'
      }
      sh 'npm run dev &'
    }
  }
}