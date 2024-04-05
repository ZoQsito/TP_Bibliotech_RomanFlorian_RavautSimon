<?php

namespace App\Controller;

use App\Repository\PageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DeletepageController extends AbstractController
{
    private $pageRepository;

    public function __construct(PageRepository $pageRepository)
    {
        $this->pageRepository = $pageRepository;
    }

    /**
     * @Route("/api/deletepage/{idpage}", name="app_deletepage_list", methods={"DELETE"})
     */
    public function deletepage($idpage): JsonResponse
    {
        $this->pageRepository->deletePageById($idpage);
    
        return new JsonResponse(['message' => 'Le livre a été supprimé avec succès.']);
    }
}
