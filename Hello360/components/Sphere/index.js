import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from "react-360/Libraries/Mesh/Entity";

export default class Sphere extends PureComponent {
    render() {
        return (
            <Entity
                source={{
                    gltf2: asset('scene.gltf'),
                }}
                style={{transform:[
                        {translate: [-10, 0, -10]},
                        {scaleX: 0.02 },
                        { scaleY: 0.02 },
                        { scaleZ: 0.02 },
                    ]}}
            />
        );
    }
}
