import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ChampionCard({ name, description, img }) {
    return (
        <React.Fragment >
            <Card sx={{ height: 300, maxWidth: 400 }}>
                {img &&
                    <CardMedia
                        component="img"
                        height="200"
                        image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${img}_0.jpg`}
                        alt={name}
                    />
                }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

            </Card>

        </React.Fragment>
    );
}
