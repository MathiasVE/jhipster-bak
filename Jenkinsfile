node {
  stage 'fetch code'
  git 'https://github.com/MathiasVE/jhipster-demo'
  def maven = docker.image('maven:3.3.3-jdk-8')
  maven.pull()
  maven.inside {
    stage 'Install'
    sh 'mvn -B clean install'
    stage 'Test'
    sh 'mvn -B test'
    stage 'Build docker image'
    if(env.BRANCH_NAME == "development") {
      sh './mvnw package -Pdev docker:build'
    } else {
      sh './mvnw package -Pprod docker:build'
    }
  }
  stage 'Deploy'
  sh 'docker-compose -f src/main/docker/app.yml up'
}
