import { RectangleComponent, TransformComponent } from "../components";
import { RenderSystem } from "../ecs";
import { scale } from "../utils/mat3";

export const renderRectangleSystem: RenderSystem = (world, entity, _extrapolation, renderer) => {
  const transform = world.getComponent<TransformComponent>(entity, TransformComponent.name)!;
  const rectangle = world.getComponent<RectangleComponent>(entity, RectangleComponent.name)!;

  // Apply scaling based on the rectangle size
  const modelMatrix = scale(transform.getMatrix3x3(), rectangle.width, rectangle.height);

  renderer.draw(
    RectangleComponent.geometryId,
    RectangleComponent.vertexData,
    RectangleComponent.indexData,
    modelMatrix,
    rectangle.color,
  );
};
