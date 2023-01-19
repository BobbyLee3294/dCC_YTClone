from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_by_video_id(request):
    video_id_param = request.query_params.get('video_id')
    comments = Comment.objects.all()
    video_id_filter = comments.filter(video_id__type=video_id_param)

    serializer = CommentSerializer(comments, many=True)

    if video_id_param:
        filtered_serializer = CommentSerializer(video_id_filter, many=True)
        return Response(filtered_serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    print('User ', f'{request.user.id} {request.user.email} {request.user.username}')

    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)