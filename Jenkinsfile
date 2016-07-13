docker.image('maven:3.3.3-jdk-8').inside {
  git 'https://github.com/MathiasVE/jhipster-demo'
  stage 'Install'
  sh 'mvn -B clean install'
  stage 'Test'
  sh 'mvn -B clean test'
  stage 'Build docker image'
  if(env.BRANCH_NAME == "development") {
    sh './mvnw package -Pdev docker:build'
  } else {
    sh './mvnw package -Pprod docker:build'
  }
  sh 'docker-compose -f src/main/docker/app.yml up'
}
