pipeline {
  agent { docker { image 'node:20.11.1-alpine3.19' } }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('test') {
      steps {
        sh 'npm run test'
      }
      post {
        failure {
          error("Test failed, abort")
        }
      }
    }
    stage('deploy') {
      steps {
        sh 'echo would deploy the project'
      }
    }
  }
}
