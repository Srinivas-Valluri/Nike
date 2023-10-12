pipeline {
  agent any

  stages {
    stage("build"){
      steps {
        echo 'This is build stage in agent'
        script {
            def test = 2+2>3 ? 'cool commit': 'not cool commit'
            echo test
        }
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
    }
  }
}