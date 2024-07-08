function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(clown_nose, noseX-10, noseY-10, 30, 30);
}

function take_snapshot()
{
save('myFilterImage.png');
}

function gotPose(results)
{
    if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("nose x =" + results[0].pose.nose.x);
            console.log("nose y =" + results[0].pose.nose.y);
        }
}